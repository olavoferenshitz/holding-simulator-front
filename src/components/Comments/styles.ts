import { styled, keyframes } from 'styled-components'
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

export const Container = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2.5rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 1rem;
  }
`

export const CommentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 300px;
  background: ${(props) => props.theme.white};
  border-radius: 6px;
  padding: 1.5rem;
  opacity: 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:nth-child(1) {
    animation: ${slideUp} 0.5s ease-out 0.2s forwards;
  }

  &:nth-child(2) {
    animation: ${slideUp} 0.5s ease-out 0.4s forwards;
  }

  &:nth-child(3) {
    animation: ${slideUp} 0.5s ease-out 0.6s forwards;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1rem;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 0px 8px;
`

export const PictureContainer = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 12px;
`

export const Title = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  text-align: left;
  color: ${(props) => props.theme['gray-800']};
`

export const Comment = styled.p`
  font-size: 14px;
  text-align: left;
  color: ${(props) => props.theme['gray-300']};
  margin-top: 8px;
`
