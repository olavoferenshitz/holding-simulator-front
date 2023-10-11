import { Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'
import pt from 'react-phone-input-2/lang/pt.json'
import { ButtonContainer } from './styles'
import { SpinLoader } from '../SpinLoader'
import Checkbox from '../Checkbox'
import { StepTwoProps } from '../../models/interfaces'
import olavoImg from '../../assets/olavo.webp'
import { useState } from 'react'

export function StepTwo({
  control,
  isSubmitting,
  isValid,
  fields,
  handleBackStep,
  register,
}: StepTwoProps) {
  const [invalidPhone, setInvalidPhone] = useState<boolean>(false)

  function validatePhoneInput(value: string, country: any) {
    if (country.iso2 === 'br' && value.replace(/\D/g, '').length < 12) {
      setInvalidPhone(true)
      return false
    }
    if (country.iso2 === 'us' && value.replace(/\D/g, '').length < 10) {
      setInvalidPhone(true)
      return false
    }

    setInvalidPhone(false)
    return true
  }

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

      <p className="phone-label">Infome seu Whatsapp</p>

      <Controller
        name="phoneMask"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <PhoneInput
            value={null}
            country="br"
            localization={pt}
            inputProps={{
              name: 'phoneMask',
              required: true,
            }}
            isValid={(value, country) => validatePhoneInput(value, country)}
            onChange={(formattedValue) => {
              field.onChange(formattedValue)
            }}
            placeholder="Infome seu Whatsapp"
          />
        )}
      />

      <p className="phone-disclaimer">
        * Você também receberá uma análise de resultado do simulador pelo
        WhatsApp
      </p>

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
          disabled={
            isSubmitting || !isValid || !fields.privacyBool || invalidPhone
          }
        >
          {isSubmitting ? <SpinLoader /> : 'Concluir'}
        </button>
      </ButtonContainer>
    </>
  )
}
