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

export interface ResultTextsModel {
  title: string
  text1: string
  text2: string
  text3: string
  text4: string
  text5: string
  text6: string
  text7: string
  text8: string
  wpUrl: string
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
  resultTexts: ResultTextsModel[]
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
