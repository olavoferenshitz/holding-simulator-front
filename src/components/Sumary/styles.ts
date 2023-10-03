import { css, styled, keyframes } from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

const slideUp = keyframes`
 from {
    opacity: 0;
    transform: translateY(-100px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

export const SumaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 1rem;
  }
`

interface SumaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SumaryCardProps>`
  flex: 1 1 300px;
  max-width: 336px;
  background: ${(props) => props.theme['purple-500']};
  border-radius: 6px;
  padding: 1.5rem;
  opacity: 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['green-300']};
    font-weight: 600;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  &:nth-child(1) {
    animation: ${slideUp} 0.5s ease-out 0.8s forwards;
  }

  &:nth-child(2) {
    animation: ${slideUp} 0.5s ease-out 1s forwards;
  }

  &:nth-child(3) {
    animation: ${slideUp} 0.5s ease-out 1.2s forwards;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${props.theme['green-500']};

      header {
        color: ${(props) => props.theme['gray-200']};
      }
    `}

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1rem;

    strong {
      font-size: 1.5rem;
    }
  }
`
