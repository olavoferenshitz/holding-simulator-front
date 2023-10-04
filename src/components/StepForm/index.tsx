import { FormEvent, MutableRefObject, useRef } from 'react'
import { Content } from './styles'
import { useContextSelector } from 'use-context-selector'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SimulatorContext } from '../../contexts/SimulatorContext'
import {
  checkFirstStep,
  checkTranslateDirection,
  handleCreateNewSimulation,
} from '../../utils/utils-methods'
import { newTransactionFormSchema } from '../../utils/form-schema'
import { newTransactionFormInputs } from '../../models/types'
import { StepOne } from '../StepOne'
import { StepTwo } from '../StepTwo'

export function StepForm() {
  const formRef = useRef<HTMLDivElement | null>(
    null,
  ) as MutableRefObject<HTMLDivElement>
  const { currentStep, setCurrentStep, createSimulation } = useContextSelector(
    SimulatorContext,
    (context) => {
      return {
        currentStep: context.currentStep,
        setCurrentStep: context.setCurrentStep,
        createSimulation: context.createSimulation,
      }
    },
  )

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting, isValid },
    getValues,
    watch,
    reset,
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  const watchAllFields = watch()
  const { firstStepValid, fields } = checkFirstStep(watchAllFields, getValues)

  async function handleNextStep(event: FormEvent) {
    event.preventDefault()
    checkTranslateDirection('next', currentStep + 1, setCurrentStep, formRef)
  }

  async function handleBackStep(event: FormEvent) {
    event.preventDefault()
    checkTranslateDirection('back', currentStep - 1, setCurrentStep, formRef)
  }

  async function handleCreateSimulation(data: newTransactionFormInputs) {
    await handleCreateNewSimulation(data, createSimulation, reset)
  }

  return (
    <Content ref={formRef}>
      <form onSubmit={handleSubmit(handleCreateSimulation)}>
        <div
          className="step-container"
          style={{
            display: currentStep === 0 ? 'flex' : 'none',
          }}
        >
          <StepOne
            control={control}
            firstStepValid={firstStepValid}
            handleNextStep={handleNextStep}
          />
        </div>

        <div
          className="step-container"
          style={{
            display: currentStep !== 0 ? 'flex' : 'none',
          }}
        >
          <StepTwo
            control={control}
            isSubmitting={isSubmitting}
            isValid={isValid}
            fields={fields}
            handleBackStep={handleBackStep}
            register={register}
          />
        </div>
      </form>
    </Content>
  )
}
