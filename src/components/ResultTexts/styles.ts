import { styled, keyframes } from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

const fade = keyframes`
 from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  margin: 4rem auto 3rem;
  padding: 0 1.5rem;
  opacity: 0;
  animation: ${fade} 0.8s ease-out 1s forwards;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 4rem auto 1.5rem;
  }
`

export const Title = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme['purple-500']};
  text-align: center;
  padding-bottom: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.25rem;
  }
`
export const Text = styled.p`
  color: ${(props) => props.theme['gray-300']};
  padding-bottom: 1rem;
  text-align: justify;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 0.875rem;
  }
`

export const WhatsappLink = styled.a`
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  margin: 2rem auto 0;
  cursor: pointer;
  background-color: #008000;
  color: ${(props) => props.theme.white};
  transition: 0.2s;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #0a630a;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 0.875rem;
  }
`
