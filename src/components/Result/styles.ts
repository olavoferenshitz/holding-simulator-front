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
  display: flex;
  flex-direction: column;
`

export const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px 24px 0 0;
  overflow: hidden;
  width: 100%;
  background-color: ${(props) => props.theme['purple-500']};
  margin-bottom: 2rem;

  .title-wrapper {
    width: 100%;
    max-width: 48rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 2rem 1.5rem;

    h2 {
      font-size: 2.5rem;
      line-height: 2.5rem;
      color: ${(props) => props.theme['gray-100']};
      opacity: 0;
      text-align: center;
      animation: ${fade} 0.8s ease-out 0.2s forwards;

      span {
        font-size: 1.75rem;
        line-height: 1rem;
        color: ${(props) => props.theme['green-300']};
        opacity: 0;
        animation: ${fade} 0.8s ease-out 0.3s forwards;
      }
    }

    .description {
      font-size: 1.125rem;
      color: ${(props) => props.theme['gray-200']};
      padding: 1.75rem 0 0.5rem;
      opacity: 0;
      text-align: center;
      animation: ${fade} 0.8s ease-out 0.6s forwards;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    border-radius: 14px 14px 0 0;
    .title-wrapper {
      padding: 0 1rem;

      h2 {
        font-size: 1.75rem;
        line-height: 1.75rem;
        padding: 1.5rem 0 0;

        span {
          font-size: 1.25rem;
        }
      }

      .description {
        font-size: 0.875rem;
        padding: 1.25rem 0 1.5rem;
      }
    }
  }
`

export const CommentsBody = styled.div`
  width: 100%;
  padding: 3rem 0 6rem;
  border-top: 1px solid #4a5b6d4a;

  @media (max-width: ${breakpoints.tablet}) {
  }
`

export const CommentsTitle = styled.h4`
  font-size: 2rem;
  color: ${(props) => props.theme['gray-300']};
  text-align: center;
  padding: 2rem 0 3rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.25rem;
    padding: 1.5rem 0 3rem;
  }
`
