export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function parseCurrency(currency: string) {
  const cleanedString = currency.replace(/[.,]/g, '')

  const stringWithoutLastTwoChars = cleanedString.slice(0, -2)

  return Number(stringWithoutLastTwoChars)
}
