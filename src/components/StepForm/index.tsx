import { MutableRefObject, useRef } from 'react'
import {
  ButtonContainer,
  Content,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { useContextSelector } from 'use-context-selector'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SimulatorContext } from '../../contexts/SimulatorContext'
import { orderOptions, selectStyles } from '../../utils/react-select-options'
import Input from '../Input'
import Checkbox from '../Checkbox'
import { parseCurrency } from '../../utils/formatter'
import { handleDelay } from '../../utils/utils-methods'

const newTransactionFormSchema = z.object({
  name: z.string(),
  email: z.string().refine(
    (value) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      return emailRegex.test(value)
    },
    {
      message: 'Endereço de e-mail inválido',
    },
  ),
  equityAmountMask: z.string(),
  rentMask: z.string(),
  age: z.number(),
  phoneMask: z.string(),
  rentalProperty: z.enum(['sim', 'nao', '']),
  hasChildren: z.enum(['sim', 'nao', '']),
  state: z.string(),
  privacyBool: z.boolean(),
})
type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function StepForm() {
  const gridRef = useRef<HTMLDivElement | null>(
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
  const { firstStepValid, fields } = checkFirstStep(watchAllFields)

  async function handleCreateNewTransaction(data: newTransactionFormInputs) {
    const {
      name,
      email,
      equityAmountMask,
      rentMask,
      age,
      phoneMask,
      rentalProperty,
      hasChildren,
      state,
      privacyBool,
    } = data

    const equityAmount = parseCurrency(equityAmountMask)
    const rent = parseCurrency(rentMask)
    const phone = Number(phoneMask.replace(/[\D\s]/g, ''))
    const privacy = privacyBool ? 'sim' : 'nao'

    const finalData = {
      name,
      email,
      equityAmount,
      rent,
      age,
      phone,
      rentalProperty,
      hasChildren,
      state,
      privacy,
    }

    // console.log(finalData)

    await createSimulation(finalData, reset)
    reset()
  }

  function checkFirstStep(fields: any) {
    const equityValue = getValues('equityAmountMask') !== ''
    const hasChildrenValue = getValues('hasChildren') !== ''
    const rentValue = getValues('rentMask') !== ''
    const rentalValue = getValues('rentalProperty') !== ''
    const stateValue = getValues('state') !== ''
    const watch = fields

    if (
      equityValue &&
      hasChildrenValue &&
      rentValue &&
      rentalValue &&
      stateValue
    ) {
      return { firstStepValid: true, fields: watch }
    }
    return { firstStepValid: false, fields: watch }
  }

  async function handleNextStep() {
    checkTranslateDirection('next', currentStep + 1)
  }

  async function handleBackStep() {
    checkTranslateDirection('back', currentStep - 1)
  }

  async function checkTranslateDirection(
    direction: string,
    indexValue: number,
  ) {
    const modalElement = gridRef.current

    modalElement.style.transform = `translateX(${
      !direction.includes('next') ? '357px' : '-357px'
    })`
    modalElement.style.opacity = '0'

    await handleDelay(200)

    modalElement.style.transform = 'translateX(0px)'
    setCurrentStep(indexValue)
    modalElement.style.transform = `translateX(${
      direction.includes('next') ? '357px' : '-357px'
    })`

    await handleDelay(200)

    modalElement.style.opacity = '1'
    modalElement.style.transform = 'translateX(0px)'
  }

  return (
    <Content ref={gridRef}>
      <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
        <div
          className="step-container"
          style={{
            display: currentStep === 0 ? 'flex' : 'none',
          }}
        >
          <Controller
            name="equityAmountMask"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                mask="currency"
                prefix="R$"
                placeholder="Valor total do patrimônio atual"
                onChange={field.onChange}
              />
            )}
          />

          <Controller
            name="rentMask"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                mask="currency"
                prefix="R$"
                placeholder="Renda mensal familiar"
                onChange={field.onChange}
              />
            )}
          />

          <Controller
            name="state"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="select-wrapper">
                <Select
                  id="selectbox"
                  instanceId="selectbox"
                  placeholder="Selecione seu Estado"
                  isSearchable={true}
                  isClearable={false}
                  closeMenuOnSelect={true}
                  onChange={(event) => field.onChange(event?.value)}
                  styles={selectStyles}
                  options={orderOptions}
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name="rentalProperty"
            defaultValue=""
            render={({ field }) => (
              <>
                <label className="radio-label">
                  Você possui imóvel para locação?
                </label>
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="sim" value="sim">
                    Sim
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="nao" value="nao">
                    Não
                  </TransactionTypeButton>
                </TransactionType>
              </>
            )}
          />
          <Controller
            control={control}
            name="hasChildren"
            defaultValue=""
            render={({ field }) => (
              <>
                <label className="radio-label">Você tem filho?</label>
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="sim" value="sim">
                    Sim
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="nao" value="nao">
                    Não
                  </TransactionTypeButton>
                </TransactionType>
              </>
            )}
          />
          <button
            className="next-button"
            onClick={handleNextStep}
            disabled={!firstStepValid}
          >
            Prosseguir
          </button>
        </div>

        <div
          className="step-container"
          style={{
            display: currentStep !== 0 ? 'flex' : 'none',
          }}
        >
          <input
            type="text"
            placeholder="Informe seu nome"
            required
            {...register('name', { required: true })}
          />

          <input
            type="number"
            placeholder="Sua idade"
            pattern="\d*"
            max={100}
            onInput={(e: any) => {
              let inputValue = e.target.value
              if (!isNaN(inputValue) && inputValue > 100) {
                inputValue = inputValue.slice(0, 2)
              }
              e.target.value = inputValue
            }}
            required
            {...register('age', {
              valueAsNumber: true,
            })}
          />

          <Controller
            name="phoneMask"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                mask="phone"
                placeholder="Infome seu telefone"
                onChange={field.onChange}
              />
            )}
          />

          <input
            type="text"
            placeholder="Informe seu E-mail"
            required
            {...register('email')}
          />

          <Controller
            name="privacyBool"
            control={control}
            defaultValue={true}
            render={({ field }) => (
              <Checkbox
                label="Aceito a Política de Privacidade."
                checked={field.value}
                onChange={field.onChange}
              />
            )}
          />

          <ButtonContainer>
            <button className="back-button" onClick={handleBackStep}>
              Voltar
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !isValid || !fields.privacyBool}
            >
              Concluir
            </button>
          </ButtonContainer>
        </div>
      </form>
    </Content>
  )
}
