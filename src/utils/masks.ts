export function currency(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d)(\d{2})$/, '$1,$2')
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.')

  e.currentTarget.value = value
  return e
}

export function phone(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 17
  let value = e.currentTarget.value

  value = value.replace(/\D/g, '')

  value = value.replace(/^(\d{2})(\d{2})(\d{4,5})(\d{4})$/, '+$1 ($2) $3-$4')

  e.currentTarget.value = value
  return e
}
