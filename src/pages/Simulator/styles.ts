import { styled } from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const Container = styled.div`
  width: 100%;
  padding: 0 1.5rem 4rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 1rem 4rem;
  }
`

export const SimulatorContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: ${(props) =>
    `linear-gradient(90deg, ${props.theme['gray-50']}, ${props.theme['gray-200']})`};
  backdrop-filter: blur(20px) saturate(70%);
  border-radius: 28px;
  width: 100%;
  max-width: 1120px;
  height: 100%;
  min-height: 660px;
  margin: 2rem auto 4rem;
  z-index: 10;

  @media (max-width: ${breakpoints.desktopWide}) {
    flex-direction: column;
  }
  @media (max-width: ${breakpoints.tablet}) {
    border-radius: 16px;
  }
`

export const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex: 46;
  padding: 10px 70px;

  @media (max-width: ${breakpoints.desktopWide}) {
    padding: 0.625rem 1.5rem 3rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0.625rem 1.5rem 2rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 36;
  border-radius: 24px 0 0 24px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: inherit;
  background-color: ${(props) => props.theme['purple-500']};

  .title-wrapper {
    width: 100%;
    max-width: 42rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0 1.5rem;

    h1 {
      font-size: 2.5rem;
      color: ${(props) => props.theme['gray-100']};

      span {
        font-size: 1.75rem;
        line-height: 1rem;
        color: ${(props) => props.theme['green-300']};
      }
    }

    .description {
      font-size: 1.125rem;
      color: ${(props) => props.theme['gray-200']};
      padding: 2.5rem 0 0;
    }
  }

  @media (max-width: ${breakpoints.desktopWide}) {
    flex: 15;
    border-radius: 24px 24px 0 0;
    min-height: auto;

    .title-wrapper {
      padding: 0 1.5rem;

      h1 {
        font-size: 2rem;
        line-height: 2.125rem;
        padding: 1.5rem 0 0;
        text-align: center;

        span {
          font-size: 1.5rem;
        }
      }

      .description {
        font-size: 1rem;
        text-align: center;
        padding: 1.125rem 0 2.5rem;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    border-radius: 14px 14px 0 0;
    .title-wrapper {
      padding: 0 1rem;

      h1 {
        font-size: 1.25rem;
        line-height: 1.75rem;
        padding: 1.5rem 0 0;

        span {
          font-size: 1.125rem;
        }
      }

      .description {
        font-size: 0.875rem;
        padding: 1.125rem 0 1.5rem;
      }
    }
  }
`

interface PriceHighlightProps {
  variant: 'sim' | 'nao'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'sim'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
