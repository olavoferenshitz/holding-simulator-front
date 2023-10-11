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
import { priceFormatter } from '../utils/formatter'
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

    const reqBody = {
      name,
      rentalProperty,
      state,
      equityAmount: priceFormatter.format(equityAmount),
      email,
      rent: priceFormatter.format(rent),
      age,
      phone: String(phone),
      hasChildren,
      privacy,
      totalInventoryCost: priceFormatter.format(result.inventory),
      totalDonationCost: priceFormatter.format(result.donation),
      totalHoldingSaving: priceFormatter.format(result.saving),
      createdAt: new Date(),
    }

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

  async function sendDataToBotConversaWebhook(leadData: any) {
    try {
      const webhookUrl =
        'https://backend.botconversa.com.br/api/v1/webhooks-automation/catch/65317/3cHphqAMrct6/'

      const dadosWebhook = {
        nome: leadData.name,
        email: leadData.email,
        telefone: leadData.phone,
      }

      await axios.post(webhookUrl, dadosWebhook)

      // console.log('Webhook enviado com sucesso para BotConversa')
    } catch (error) {
      console.error('Erro ao enviar webhook para BotConversa:', error)
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
