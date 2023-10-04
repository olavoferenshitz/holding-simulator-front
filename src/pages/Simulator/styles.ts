import { keyframes, styled } from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

const slideUp = keyframes`
 from {
    opacity: 0;
    transform: translateY(-200px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

export const Container = styled.div`
  width: 100%;
  padding: 0 1.5rem 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 1rem 2rem;
  }
`

export const SimulatorContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  background: ${(props) =>
    `linear-gradient(90deg, ${props.theme['gray-50']}, ${props.theme['gray-200']})`};
  backdrop-filter: blur(20px) saturate(70%);
  border-radius: 28px;
  width: 100%;
  max-width: 1120px;
  height: 100%;
  min-height: 660px;
  margin: 2rem auto 4rem;
  z-index: 10;
  animation: ${slideUp} 0.5s;
  transition: 0.5s;

  @media (max-width: ${breakpoints.desktopWide}) {
    flex-direction: column;
    margin: 2rem auto 2rem;
  }
  @media (max-width: ${breakpoints.tablet}) {
    border-radius: 16px;
  }
`
