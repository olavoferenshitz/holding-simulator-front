import { HeaderContainer, HeaderContent } from './styles'
// import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/olavo-logo-white.webp'
// import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
      </HeaderContent>
    </HeaderContainer>
  )
}
