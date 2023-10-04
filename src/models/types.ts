import * as z from 'zod'
import { newTransactionFormSchema } from '../utils/form-schema'

export type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export type PageType = 'HOME' | 'RESULT'
