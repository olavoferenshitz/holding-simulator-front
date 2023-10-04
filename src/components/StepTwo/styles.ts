import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { breakpoints } from '../../styles/breakpoints'

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 26%);
  gap: 1rem;
  margin-top: 0.25rem;

  &:focus {
    box-shadow: none !important;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

interface TransactionTypeButtonProps {
  variant: 'sim' | 'nao'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  background: ${(props) => props.theme.white};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme['gray-300']};

  svg {
    color: ${(props) =>
      props.variant === 'sim'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &:focus {
    box-shadow: none;
  }

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme.white};
    transition: background-color 0.2s;
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === 'sim'
        ? props.theme['green-500']
        : props.theme['red-500']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0.75rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: inherit;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column-reverse;
  }
`
