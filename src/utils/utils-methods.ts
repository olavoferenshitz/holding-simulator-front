import { MutableRefObject } from 'react'
import { UseFormGetValues, UseFormReset } from 'react-hook-form'
import { newTransactionFormInputs } from '../models/types'
import { parseCurrency } from './formatter'
import { CreateSimulationInput } from '../models/interfaces'

export function handleDelay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function checkTranslateDirection(
  direction: string,
  indexValue: number,
  setFunction: (step: number) => void,
  elementRef: MutableRefObject<HTMLDivElement>,
) {
  const modalElement = elementRef.current

  modalElement.style.transform = `translateX(${
    !direction.includes('next') ? '357px' : '-357px'
  })`
  modalElement.style.opacity = '0'

  await handleDelay(200)

  modalElement.style.transform = 'translateX(0px)'
  setFunction(indexValue)
  modalElement.style.transform = `translateX(${
    direction.includes('next') ? '357px' : '-357px'
  })`

  await handleDelay(200)

  modalElement.style.opacity = '1'
  modalElement.style.transform = 'translateX(0px)'
}

export function checkFirstStep(
  fields: any,
  getValues: UseFormGetValues<newTransactionFormInputs>,
) {
  const equityValue = getValues('equityAmountMask') !== ''
  const hasChildrenValue = getValues('hasChildren') !== ''
  const rentValue = getValues('rentMask') !== ''
  const rentalValue = getValues('rentalProperty') !== ''
  const stateValue = getValues('state') !== ''
  const watch = fields

  if (
    equityValue &&
    hasChildrenValue &&
    rentValue &&
    rentalValue &&
    stateValue
  ) {
    return { firstStepValid: true, fields: watch }
  }
  return { firstStepValid: false, fields: watch }
}

export async function handleCreateNewSimulation(
  data: newTransactionFormInputs,
  createSimulation: (
    data: CreateSimulationInput,
    reset: UseFormReset<newTransactionFormInputs>,
  ) => void,
  reset: UseFormReset<newTransactionFormInputs>,
) {
  const {
    name,
    email,
    equityAmountMask,
    rentMask,
    age,
    phoneMask,
    rentalProperty,
    hasChildren,
    state,
    privacyBool,
  } = data

  const equityAmount = parseCurrency(equityAmountMask)
  const rent = parseCurrency(rentMask)
  const phone = Number(phoneMask.replace(/[\D\s]/g, ''))
  const privacy = privacyBool ? 'sim' : 'nao'

  const finalData = {
    name,
    email,
    equityAmount,
    rent,
    age,
    phone,
    rentalProperty,
    hasChildren,
    state,
    privacy,
  }

  console.log(finalData)

  await createSimulation(finalData, reset)
  reset()
}
