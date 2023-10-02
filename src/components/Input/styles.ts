import { styled } from 'styled-components'

interface InputProps {
  hasprefix: string
}

export const Container = styled.div<InputProps>`
  width: 100%;
  display: flex;
  margin-bottom: 4px;

  .mask-input {
    flex: 1;
    border-radius: ${(props) =>
      props.hasprefix === 'true' ? '0 6px 6px 0 !important' : ''};
    border: 0;
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  .prefix-span {
    padding: 1rem;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['gray-300']};
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
`
