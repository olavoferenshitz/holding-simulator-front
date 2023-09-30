import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { SumaryContainer, SummaryCard } from './styles'
import { priceFormatter } from '../../utils/formatter'
import { useSumary } from '../../hooks/useSumary'

export function Sumary() {
  const sumary = useSumary()

  return (
    <SumaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>

          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(sumary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>

          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(sumary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>

          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(sumary.total)}</strong>
      </SummaryCard>
    </SumaryContainer>
  )
}
