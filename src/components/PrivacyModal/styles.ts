import { styled } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { breakpoints } from '../../styles/breakpoints'

export const Container = styled(Dialog.Portal)`
  padding: 0 10px;
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 15;
`

export const Content = styled(Dialog.Content)`
  width: 100%;
  max-width: 32rem;
  padding: 3.5rem 0.5rem 1.5rem 1rem;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['gray-300']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;

  object {
    width: 100%;
    height: 500px;
    border-radius: 6px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;

    object {
      height: 80vh;
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1rem;
  right: 1rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};
`
