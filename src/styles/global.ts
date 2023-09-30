import { defaultTheme } from './themes/default'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
    }

    body {
        /* background-color: ${(props) => props.theme['gray-800']}; */
        background: linear-gradient(to bottom, RGBA(22,2,57,1) 0%,RGBA(93,191,70,0.38) 100%) no-repeat;
        color: ${(props) => props.theme['gray-100']};
        -webkit-font-smoothing: antialiased;
        min-height: 100vh;
    }

    body, input, textearea, button {
        font: 400 1rem 'Roboto', sans-serif;
    }

    *::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 6px;
      height: 4px;
      margin-top: 4px; 
    }

     *::-webkit-scrollbar-track {
      background: #fff;
      border: 1px solid ${defaultTheme['gray-200']};
      border-radius: 5px;
      -webkit-border-radius: 5px;
    }

    *::-webkit-scrollbar-thumb {
      background-color: ${defaultTheme['green-500']};
      background-clip: padding-box;
      border-radius: 5px;
      -webkit-border-radius: 5px;
    }
`
