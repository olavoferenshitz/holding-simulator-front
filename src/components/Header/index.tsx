import { HeaderContainer, HeaderContent } from './styles'
import logoImg from '../../assets/olavo-logo-white.webp'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="Logo do Escritório de Olavo Ferenshitz" />
      </HeaderContent>
    </HeaderContainer>
  )
}
