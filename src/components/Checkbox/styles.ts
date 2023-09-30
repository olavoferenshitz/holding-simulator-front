import styled, { keyframes } from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`

export const Label = styled.label`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme['gray-300']};
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    align-items: flex-start;
    gap: 6px;
  }
`

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`

interface TransactionTypeButtonProps {
  ischecked: string
}

export const Indicator = styled.div<TransactionTypeButtonProps>`
  min-width: 24px;
  height: 24px;
  background: ${(props) =>
    props.ischecked === 'true' ? props.theme['green-300'] : props.theme.white};
  position: relative;
  border: 2px solid ${(props) => props.theme['green-300']};
  border-radius: 0.2em;

  ${Input}:not(:disabled):checked & {
    background: #b4ddc1;
  }

  ${Label}:hover && {
    background: ${(props) =>
      props.ischecked === 'true' ? props.theme['green-500'] : '#FFFFFF'};
    border: 2px solid ${(props) => props.theme['green-500']};
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0em;
    left: 6px;
    width: 26%;
    height: 58%;
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    animation-name: ${rotate};
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  &::disabled {
    cursor: not-allowed;
  }
`
