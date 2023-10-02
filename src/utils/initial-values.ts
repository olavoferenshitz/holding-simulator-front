import {
  CreateSimulationInput,
  HoldingSaving,
  Result,
} from '../models/interfaces'

export const initialInputValues: CreateSimulationInput = {
  name: '',
  rentalProperty: '',
  state: '',
  equityAmount: 0,
  email: '',
  rent: 0,
  age: 0,
  phone: 0,
  hasChildren: '',
  privacy: '',
}

export const initialResultValues: Result = {
  inventory: 0,
  donation: 0,
  saving: 0,
}

export const initialHoldingValues: HoldingSaving = {
  cartorio: 0,
  holding: 0,
}
