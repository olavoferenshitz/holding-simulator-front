import { StepForm } from '../StepForm'
import * as Dialog from '@radix-ui/react-dialog'
import { FormWrapper, TitleContainer } from './styles'
import { PrivacyModal } from '../PrivacyModal'

export function Start() {
  return (
    <>
      <TitleContainer>
        <div className="title-wrapper">
          <h1>
            Simulador de Holding Familiar: <br />
            <span>Calculadora Online e Gratuita</span>
          </h1>
          <p className="description">
            Descubra a excelência da proteção patrimonial com o inovador Método
            Legado80 em nosso Simulador de Holding Familiar. Calcule doações em
            vida, compare com inventários tradicionais e veja como o Legado80
            oferece uma proteção excepcional ao seu patrimônio através da
            Holding, trazendo uma economia mínima de 80%. Simule agora para você
            garantir um legado sólido para sua família.
          </p>
        </div>
      </TitleContainer>
      <FormWrapper>
        <StepForm />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="privacy-button">Política de Privacidade</button>
          </Dialog.Trigger>

          <PrivacyModal />
        </Dialog.Root>
      </FormWrapper>
    </>
  )
}
