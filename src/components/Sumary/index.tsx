import { SumaryContainer, SummaryCard } from './styles'
import { priceFormatter } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'
import { SimulatorContext } from '../../contexts/SimulatorContext'

export function Sumary() {
  const { result } = useContextSelector(SimulatorContext, (context) => {
    return {
      result: context.resultData,
    }
  })

  return (
    <SumaryContainer>
      <SummaryCard>
        <header>
          <span>Custo Total do Inventário</span>
        </header>

        <strong>{priceFormatter.format(result.inventory)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Custo Total da Doação em Vida</span>
        </header>

        <strong>{priceFormatter.format(result.donation)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Economia mínima para sua Família</span>
        </header>

        <strong>{priceFormatter.format(result.saving)}</strong>
      </SummaryCard>
    </SumaryContainer>
  )
}
