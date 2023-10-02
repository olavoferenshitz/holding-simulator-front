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

export const TextBody = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  margin: 4rem auto 3rem;
  opacity: 0;
  animation: ${fade} 0.8s ease-out 1s forwards;
`

export const Title = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme['purple-500']};
  text-align: center;
  padding-bottom: 2rem;
`

export const Text = styled.p`
  color: ${(props) => props.theme['gray-300']};
  padding-bottom: 1rem;
  text-align: justify;
`

export const WhatsappButton = styled.button`
  width: 100%;
  height: 58px;
  border: 0;
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  margin: 2rem auto 0;
  cursor: pointer;
  background-color: #008000;
  color: ${(props) => props.theme.white};
  transition: 0.2s;

  &:hover {
    background-color: #0a630a;
  }
`

export const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px 24px 0 0;
  overflow: hidden;
  width: 100%;
  min-height: inherit;
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
