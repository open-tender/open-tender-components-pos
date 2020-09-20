import React from 'react'
// import logo from './logo.svg'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from './GlobalStyles'
import { theme } from './utils'
import { GreetingNew } from './components'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="app">
        <GreetingNew title="Open Tender Component Library">
          <p>
            A set of reusable components used in the Open Tender POS and KDS
            apps.
          </p>
        </GreetingNew>
      </div>
    </ThemeProvider>
  )
}

export default App
