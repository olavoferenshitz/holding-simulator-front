import { styled } from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { breakpoints } from '../../styles/breakpoints'

export const Content = styled.section`
  width: 100%;
  max-width: 42rem;
  border-radius: 6px;
  transition: 0.2s;

  form {
    width: 100%;
    min-height: 487px;
    transition: 0.5s;

    .step-container {
      width: 100%;
      margin-top: 2rem;

      display: flex;
      flex-direction: column;
      gap: 1rem;

      input {
        border-radius: 6px;
        border: 0;
        background: ${(props) => props.theme.white};
        color: ${(props) => props.theme['gray-300']};
        padding: 1rem;

        &::placeholder {
          color: ${(props) => props.theme['gray-500']};
        }
      }

      .select-wrapper {
        width: 55%;
      }

      .radio-label {
        margin-bottom: -8px;
        font-size: 1rem;
        font-weight: 600;
        color: ${(props) => props.theme['gray-300']};
      }

      #react-select-selectbox-input {
        &:focus {
          box-shadow: none !important;
        }
      }

      button[type='submit'],
      .next-button,
      .back-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 58px;
        border: 0;
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 6px;
        margin-top: 1.5rem;
        cursor: pointer;
      }

      button[type='submit'],
      .next-button {
        background: ${(props) => props.theme['green-300']};
        color: ${(props) => props.theme.white};

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        &:not(:disabled):hover {
          background: ${(props) => props.theme['green-700']};
          transition: background-color 0.2s;
        }
      }

      .back-button {
        color: ${(props) => props.theme.white};
        background: ${(props) => props.theme['purple-500']};
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    form {
      .step-container {
        .select-wrapper {
          width: 100%;
        }

        .radio-label {
          margin-top: 4px;
        }
        button[type='submit'],
        .next-button,
        .back-button {
          margin-top: 0.625rem;
        }
      }
    }
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
