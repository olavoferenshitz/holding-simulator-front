import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { SimulatorContext } from '../contexts/SimulatorContext'

export function useSumary() {
  const transactions = useContextSelector(SimulatorContext, (context) => {
    return context.transactions
  })

  const sumary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.rentalProperty === 'sim') {
          acc.income += transaction.equityAmount
          acc.total += transaction.equityAmount
        } else {
          acc.outcome += transaction.equityAmount
          acc.total -= transaction.equityAmount
        }

        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transactions])

  return sumary
}
