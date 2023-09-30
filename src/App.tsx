import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Simulator } from './pages/Simulator'
import { SimulatorProvider } from './contexts/SimulatorContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SimulatorProvider>
        <Simulator />
      </SimulatorProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
