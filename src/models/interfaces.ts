import { FormEvent, ReactNode } from 'react'
import { Control, UseFormRegister } from 'react-hook-form'
import { PageType, newTransactionFormInputs } from './types'

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

export interface StepOneProps {
  control: Control<newTransactionFormInputs>
  firstStepValid: boolean
  handleNextStep: (event: FormEvent) => void
}

export interface StepTwoProps {
  control: Control<newTransactionFormInputs>
  isSubmitting: boolean
  isValid: boolean
  fields: any
  handleBackStep: (event: FormEvent) => void
  register: UseFormRegister<newTransactionFormInputs>
}

export interface PictureProps {
  imageSrc: string
}
