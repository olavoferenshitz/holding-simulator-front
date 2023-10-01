import {
  CreateSimulationInput,
  Result,
  StateTax,
} from '../contexts/SimulatorContext'

export function calculateResult(
  simulation: CreateSimulationInput,
  stateTaxes: StateTax[],
): Result {
  const equityValue = simulation?.equityAmount
  const stateKey = simulation?.state
  const notaryFees: number = 10000

  const [state] = stateTaxes.filter((stateTax) => stateTax.estado === stateKey)
  const inheritTax = equityValue * state?.imposto
  const lawyerFees = equityValue * state?.advogado
  const inventoryValue = notaryFees + inheritTax + lawyerFees
  const donationValue = notaryFees + inheritTax
  const savingValue = inventoryValue - donationValue

  console.log('equityValue', equityValue)
  console.log('stateTaxes', stateTaxes)
  console.log('state', state)
  console.log('inheritTax', inheritTax)
  console.log('lawyerFees', lawyerFees)
  console.log('inventoryValue', inventoryValue)
  console.log('donationValue', donationValue)
  console.log('savingValue', savingValue)

  return {
    inventory: inventoryValue,
    donation: donationValue,
    saving: savingValue,
  }
}
