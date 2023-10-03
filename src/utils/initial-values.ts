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

export const comments = [
  {
    nome: 'Maria da Conceição Ribeiro dos Santos',
    imgUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjWb-EdiySiYR9ghnoh8ClMhS1wEmpT1tEOIBaSCuqjKa5U=w60-h60-p-rp-mo-br100',
    comentario:
      'Fui atendida muito bem e recomendo os trabalhos de Holding Familiar',
  },
  {
    nome: 'Chrystiano Trovao',
    imgUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjUQKKYyIVtGhFxfAn7UiaNbZiK8sBxtk2fhhvdlMSd4yA=w60-h60-p-rp-mo-ba3-br100',
    comentario:
      'OF Advocacia | Holding Familiar ,atendimento espetacular super indico',
  },
  {
    nome: 'Janaine Calado',
    imgUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjU_clOhV52tgwHD0pD8j473xtHai5SoawH_RHFXTi4Yn2M=w60-h60-p-rp-mo-br100',
    comentario:
      'Serviço de qualidade e muito bem feito, ajudou bastante para proteger os bens da minha família.',
  },
]
