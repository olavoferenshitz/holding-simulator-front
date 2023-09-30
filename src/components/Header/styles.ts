import { styled } from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const HeaderContainer = styled.header`
  /* background: ${(props) => props.theme['gray-900']}; */
  padding: 0.8rem 0 2.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 250px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    img {
      width: 180px;
    }
  }
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`
