import { ThemeProvider } from 'styled-components'
import { TransactionsContextProvider } from './contexts/TransactionsContext'
import { Home } from './Pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsContextProvider>
        <Home />
      </TransactionsContextProvider>
    </ThemeProvider>
  )
}

export default App
