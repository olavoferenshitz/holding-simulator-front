import * as z from 'zod'

export const newTransactionFormSchema = z.object({
  name: z.string(),
  email: z.string().refine(
    (value) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      return emailRegex.test(value)
    },
    {
      message: 'Endereço de e-mail inválido',
    },
  ),
  equityAmountMask: z.string(),
  rentMask: z.string(),
  age: z.number(),
  phoneMask: z.string(),
  rentalProperty: z.enum(['sim', 'nao', '']),
  hasChildren: z.enum(['sim', 'nao', '']),
  state: z.string(),
  privacyBool: z.boolean(),
})
