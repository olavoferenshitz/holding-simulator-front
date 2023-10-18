import { useState, useEffect, useCallback } from 'react'
import {
  statesSheetsEndpoint,
  serverApi,
  holdingSheetsEndpoint,
  resultTextsEndpoint,
} from '../lib/axios'
import { createContext } from 'use-context-selector'
import axios from 'axios'
import { calculateResult } from '../utils/calculateResult'
import {
  CreateSimulationInput,
  HoldingSaving,
  Result,
  ResultTextsModel,
  SimulatorContextType,
  SimulatorProviderProps,
  StateTax,
} from '../models/interfaces'
import {
  initialHoldingValues,
  initialInputValues,
  initialResultValues,
} from '../utils/initial-values'
import { PageType } from '../models/types'
import {
  createRequestBody,
  sendDataToBotConversaWebhook,
} from '../utils/utils-methods'

export const SimulatorContext = createContext({} as SimulatorContextType)

export function SimulatorProvider({ children }: SimulatorProviderProps) {
  const [stateTaxes, setStateTaxes] = useState<StateTax[]>([])
  const [holdingSaving, setHoldingSaving] =
    useState<HoldingSaving>(initialHoldingValues)
  const [resultTexts, setResultTexts] = useState<ResultTextsModel[]>([])
  const [simulationData, setSimulationData] =
    useState<CreateSimulationInput>(initialInputValues)
  const [resultData, setResultData] = useState<Result>(initialResultValues)
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [currrentPage, setCurrrentPage] = useState<PageType>('HOME')

  useEffect(() => {
    fetchStateTaxes()
    fetchHoldingSaving()
    fetchResultTexts()
  }, [])

  const fetchStateTaxes = useCallback(async () => {
    const response = await axios.get(statesSheetsEndpoint)

    setStateTaxes(response.data)
  }, [])

  const fetchHoldingSaving = useCallback(async () => {
    const response = await axios.get(holdingSheetsEndpoint)

    setHoldingSaving(response.data[0])
  }, [])

  const fetchResultTexts = useCallback(async () => {
    const response = await axios.get(resultTextsEndpoint)

    setResultTexts(response.data)
  }, [])

  async function createSimulation(
    data: CreateSimulationInput,
    reset: () => void,
  ) {
    setSimulationData(data)

    const result = calculateResult(data, stateTaxes, holdingSaving)

    setResultData(result)

    const reqBody = createRequestBody(data, result)

    try {
      await serverApi.post('/leads', reqBody)

      await sendDataToBotConversaWebhook(reqBody)

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
        resultTexts,
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
