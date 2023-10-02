import {
  CreateSimulationInput,
  HoldingSaving,
  Result,
  StateTax,
} from '../contexts/SimulatorContext'

export function calculateResult(
  simulation: CreateSimulationInput,
  stateTaxes: StateTax[],
  holdingSaving: HoldingSaving,
): Result {
  const equityValue = simulation?.equityAmount
  const stateKey = simulation?.state
  const notaryFees: number = holdingSaving.cartorio
  const holding: number = holdingSaving.holding

  const [state] = stateTaxes.filter((stateTax) => stateTax.estado === stateKey)
  const inheritTax = equityValue * state?.imposto
  const lawyerFees = equityValue * state?.advogado
  const inventoryValue = notaryFees + inheritTax + lawyerFees
  const donationValue = notaryFees + inheritTax
  const savingValue = inventoryValue * holding

  return {
    inventory: inventoryValue,
    donation: donationValue,
    saving: savingValue,
  }
}
