import { HeaderContainer, HeaderContent } from './styles'
import logoImg from '../../assets/olavo-logo-white.webp'

export function Header() {
  const olavoWebSite = 'https://olavoferenshitz.com/'
  return (
    <HeaderContainer>
      <HeaderContent>
        <a href={olavoWebSite} target="_blank" rel="noopener noreferrer">
          <img src={logoImg} alt="Logo do Escritório de Olavo Ferenshitz" />
        </a>
      </HeaderContent>
    </HeaderContainer>
  )
}
