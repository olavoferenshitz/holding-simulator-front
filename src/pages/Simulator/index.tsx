import { Header } from '../../components/Header'
import { Container, SimulatorContainer } from './styles'
import { SimulatorContext } from '../../contexts/SimulatorContext'
import { useContextSelector } from 'use-context-selector'
import { Result } from '../../components/Result'
import { Start } from '../../components/Start'

export function Simulator() {
  const { currrentPage } = useContextSelector(SimulatorContext, (context) => {
    return {
      currrentPage: context.currrentPage,
    }
  })
  return (
    <Container>
      <Header />

      <SimulatorContainer>
        {currrentPage === 'HOME' ? <Start /> : <Result />}
      </SimulatorContainer>
    </Container>
  )
}
