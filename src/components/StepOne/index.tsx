import { Controller } from 'react-hook-form'
import Input from '../Input'
import Select from 'react-select'
import { orderOptions, selectStyles } from '../../utils/react-select-options'
import { TransactionType, TransactionTypeButton } from './styles'
import { StepOneProps } from '../../models/interfaces'

export function StepOne({
  control,
  firstStepValid,
  handleNextStep,
}: StepOneProps) {
  return (
    <>
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
            <TransactionType onValueChange={field.onChange} value={field.value}>
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
            <TransactionType onValueChange={field.onChange} value={field.value}>
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
    </>
  )
}
