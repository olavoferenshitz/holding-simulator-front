import { ReactNode, useState, useEffect, useCallback } from 'react'
import {
  statesSheetsEndpoint,
  serverApi,
  holdingSheetsEndpoint,
} from '../lib/axios'
import { createContext } from 'use-context-selector'
import axios from 'axios'
import { calculateResult } from '../utils/calculateResult'
import { priceFormatter } from '../utils/formatter'

export interface Result {
  inventory: number
  donation: number
  saving: number
}

export interface StateTax {
  estado: string
  imposto: number
  advogado: number
}

export interface HoldingSaving {
  cartorio: number
  holding: number
}

export interface CreateSimulationInput {
  name: string
  rentalProperty: 'sim' | 'nao' | ''
  state: string
  equityAmount: number
  email: string
  rent: number
  age: number
  phone: number
  hasChildren: string
  privacy: string
}

type PageType = 'HOME' | 'RESULT'

interface SimulatorContextType {
  stateTaxes: StateTax[]
  simulationData: CreateSimulationInput
  holdingSaving: HoldingSaving
  resultData: Result
  currentStep: number
  setCurrentStep: (step: number) => void
  currrentPage: PageType
  setCurrrentPage: (page: PageType) => void
  createSimulation: (
    data: CreateSimulationInput,
    reset: () => void,
  ) => Promise<void>
}

interface SimulatorProviderProps {
  children: ReactNode
}

const initialInputValues: CreateSimulationInput = {
  name: '',
  rentalProperty: '',
  state: '',
  equityAmount: 0,
  email: '',
  rent: 0,
  age: 0,
  phone: 0,
  hasChildren: '',
  privacy: '',
}

const initialResultValues: Result = {
  inventory: 0,
  donation: 0,
  saving: 0,
}

const initialHoldingValues: HoldingSaving = {
  cartorio: 0,
  holding: 0,
}

export const SimulatorContext = createContext({} as SimulatorContextType)

export function SimulatorProvider({ children }: SimulatorProviderProps) {
  const [stateTaxes, setStateTaxes] = useState<StateTax[]>([])
  const [holdingSaving, setHoldingSaving] =
    useState<HoldingSaving>(initialHoldingValues)
  const [simulationData, setSimulationData] =
    useState<CreateSimulationInput>(initialInputValues)
  const [resultData, setResultData] = useState<Result>(initialResultValues)
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [currrentPage, setCurrrentPage] = useState<PageType>('HOME')

  useEffect(() => {
    fetchStateTaxes()
    fetchHoldingSaving()
  }, [])

  const fetchStateTaxes = useCallback(async () => {
    const response = await axios.get(statesSheetsEndpoint)

    setStateTaxes(response.data)
  }, [])

  const fetchHoldingSaving = useCallback(async () => {
    const response = await axios.get(holdingSheetsEndpoint)

    setHoldingSaving(response.data[0])
  }, [])

  async function createSimulation(
    data: CreateSimulationInput,
    reset: () => void,
  ) {
    const {
      name,
      rentalProperty,
      state,
      equityAmount,
      email,
      rent,
      age,
      phone,
      hasChildren,
      privacy,
    } = data

    setSimulationData(data)

    const result = calculateResult(data, stateTaxes, holdingSaving)

    setResultData(result)

    try {
      await serverApi.post('/leads', {
        name,
        rentalProperty,
        state,
        equityAmount: priceFormatter.format(equityAmount),
        email,
        rent: priceFormatter.format(rent),
        age,
        phone,
        hasChildren,
        privacy,
        totalInventoryCost: priceFormatter.format(result.inventory),
        totalDonationCost: priceFormatter.format(result.donation),
        createdAt: new Date(),
      })

      setCurrrentPage('RESULT')
    } catch (error: any) {
      console.log(error)
      if (
        error.message === 'Network Error' ||
        error.message.includes('status code 500')
      ) {
        alert('Estamos com problemas, tente novamente mais tarde.')
      }

      if (error.code === 'ERR_BAD_REQUEST') {
        alert(error.response.data.error)
      }

      setCurrentStep(0)
      reset()
    }
  }

  return (
    <SimulatorContext.Provider
      value={{
        stateTaxes,
        holdingSaving,
        simulationData,
        resultData,
        currentStep,
        setCurrentStep,
        currrentPage,
        setCurrrentPage,
        createSimulation,
      }}
    >
      {children}
    </SimulatorContext.Provider>
  )
}
