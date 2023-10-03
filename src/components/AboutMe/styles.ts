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

export const PictureContainer = styled.div`
  width: 300px;
  min-width: 300px;
  height: 300px;
  opacity: 0;
  animation: ${fade} 0.8s ease-out 0.2s forwards;
  backdrop-filter: contrast(0.7);
  border: 4px solid ${(props) => props.theme['green-500']};
  border-radius: 50%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 220px;
    min-width: 220px;
    height: 220px;
  }
`

export const AboutMeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 24px 24px;
  overflow: hidden;
  width: 100%;
  padding: 4rem;
  gap: 3rem;
  background-color: ${(props) => props.theme['purple-500']};

  .about-me-wrapper {
    width: 100%;
    max-width: 660px;

    .title {
      font-size: 2rem;
      line-height: 2.5rem;
      padding-bottom: 2rem;
      color: ${(props) => props.theme['gray-100']};
      opacity: 0;
      animation: ${fade} 0.8s ease-out 0.4s forwards;
    }

    .about-text {
      color: ${(props) => props.theme['gray-200']};
      padding-bottom: 1rem;
      opacity: 0;
      animation: ${fade} 0.8s ease-out 0.6s forwards;
    }

    .follow-me {
      font-weight: 600;
      color: ${(props) => props.theme['green-300']};
      padding: 1rem 0;
      opacity: 0;
      animation: ${fade} 0.8s ease-out 0.8s forwards;
    }

    .intagram {
      text-decoration: none;
      transition: 0.5s;

      &:hover {
        svg {
          opacity: 0.5;
        }
      }
    }
  }

  @media (max-width: ${breakpoints.desktopWide}) {
    flex-direction: column-reverse;
    padding: 4rem 2rem;
    gap: 2.5rem;

    .about-me-wrapper {
      .title {
        font-size: 1.5rem;
        line-height: 1.5rem;
        text-align: center;
      }
      .about-text {
        font-size: 0.875rem;
        text-align: justify;
      }
    }
  }
`
