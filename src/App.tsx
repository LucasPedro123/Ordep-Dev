import { GlobalStyle } from "./assets/styles"
import { ThemeProvider } from 'styled-components'
import { ThemeGlobal } from "./assets/styles/theme"
import Routes from './Routes/Routes.tsx'

function App() {

  return (
    <ThemeProvider theme={ThemeGlobal}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  )
}

export default App
