import { Controller } from 'react-hook-form'
import Input from '../Input'
import { ButtonContainer } from './styles'
import { SpinLoader } from '../SpinLoader'
import Checkbox from '../Checkbox'
import { StepTwoProps } from '../../models/interfaces'
import olavoImg from '../../assets/olavo.png'

export function StepTwo({
  control,
  isSubmitting,
  isValid,
  fields,
  handleBackStep,
  register,
}: StepTwoProps) {
  return (
    <>
      <img src={olavoImg} alt="Foto de Olavo" style={{ display: 'none' }} />
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
          {isSubmitting ? <SpinLoader /> : 'Concluir'}
        </button>
      </ButtonContainer>
    </>
  )
}
