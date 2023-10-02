import { ReactNode } from 'react'
import { PageType } from './types'

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

export interface SimulatorContextType {
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

export interface SimulatorProviderProps {
  children: ReactNode
}
