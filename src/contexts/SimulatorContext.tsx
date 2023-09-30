import { ReactNode, useState, useEffect, useCallback } from 'react'
import { serverApi } from '../lib/axios'
import { createContext } from 'use-context-selector'
import axios from 'axios'

interface StateTax {
  estado: string
  imposto: string
  advogado: string
}

interface CreateTransactionInput {
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
  contact: string
}

interface SimulatorContextType {
  transactions: StateTax[]
  currrentStep: number
  setCurrrentStep: (step: number) => void
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (
    data: CreateTransactionInput,
    reset: () => void,
  ) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const SimulatorContext = createContext({} as SimulatorContextType)

export function SimulatorProvider({ children }: TransactionsProviderProps) {
  const [stateTaxes, setStateTaxes] = useState<StateTax[]>([])
  const [currrentStep, setCurrrentStep] = useState<number>(0)

  useEffect(() => {
    fetchStateTaxes()
  }, [])

  const fetchStateTaxes = useCallback(async () => {
    const response = await axios.get(
      'https://script.googleusercontent.com/macros/echo?user_content_key=1dMeJ9Xdpnn2OxtSIImMxFPr_iF0Nl-b9FpPS3eQ1fCT9AGVM9w4hBGDoS8kr3N4OP5C2czH8YV5BzsD1ZuV1iptCwwcopXlm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKK6-uAYwnfC5TB9dlq_DShQWV38amHX9GcE2L4R-OCvvd32pPjzNjFmtE7zxT6rIDy-8zbrlm9nFc_KqrDZdBQlBoHUyqzulQ&lib=MCrq-EJWv4RozjKmUTCvWm4xUbCXvGgRQ',
    )

    setStateTaxes(response.data)
  }, [])

  const createTransaction = useCallback(
    async (data: CreateTransactionInput, reset: () => void) => {
      const {
        name,
        email,
        equityAmount,
        rent,
        age,
        phone,
        rentalProperty,
        hasChildren,
        state,
      } = data

      try {
        const response = await serverApi.post('/leads', {
          name,
          email,
          equityAmount,
          rent,
          age,
          phone,
          rentalProperty,
          hasChildren,
          state,
          createdAt: new Date(),
        })

        setStateTaxes((state) => [...state, response.data])
      } catch (error: any) {
        console.log(error.message)
        if (
          error.message === 'Network Error' ||
          error.message.includes('status code 500')
        ) {
          alert('Estamos com problemas, tente novamente mais tarde.')
        }

        reset()
        setCurrrentStep(0)
      }
    },
    [],
  )

  return (
    <SimulatorContext.Provider
      value={{
        transactions: stateTaxes,
        currrentStep,
        setCurrrentStep,
        fetchTransactions: fetchStateTaxes,
        createTransaction,
      }}
    >
      {children}
    </SimulatorContext.Provider>
  )
}
