import { CloseButton, Container, Content, Overlay } from './styles'
import { X } from 'phosphor-react'

export function PrivacyModal() {
  return (
    <Container>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <object
          data="https://www.olavoferenshitz.com/politica-de-privacidade-simplificada"
          type="text/html"
        ></object>
      </Content>
    </Container>
  )
}
