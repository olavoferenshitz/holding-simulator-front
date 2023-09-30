// import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { StepForm } from '../../components/StepForm'
import {
  Container,
  FormWrapper,
  TitleContainer,
  SimulatorContainer,
} from './styles'
// import { TransactionsContext } from '../../contexts/TransactionContext'
// import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function Simulator() {
  return (
    <Container>
      <Header />

      <SimulatorContainer>
        <TitleContainer>
          <div className="title-wrapper">
            <h1>
              Simulador de Holding Familiar: <br />
              <span>Calculadora Online e Gratuita</span>
            </h1>
            <p className="description">
              Descubra a excelência da proteção patrimonial com o inovador
              Método Legado80 em nosso Simulador de Holding Familiar. Calcule
              doações em vida, compare com inventários tradicionais e veja como
              o Legado80 oferece uma proteção excepcional ao seu patrimônio
              através da Holding, trazendo uma economia mínima de 80%. Simule
              agora para você garantir um legado sólido para sua família.
            </p>
          </div>
        </TitleContainer>
        <FormWrapper>
          <StepForm />
        </FormWrapper>
      </SimulatorContainer>
    </Container>
  )
}
