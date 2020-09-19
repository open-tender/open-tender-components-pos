import React from 'react'
// import logo from './logo.svg'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from './GlobalStyles'
import { theme } from './utils'
import { Greeting } from './components'
import './App.scss'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="app">
        <Greeting title="Open Tender Component Library">
          <p>
            A set of reusable components used in the Open Tender POS and KDS
            apps.
          </p>
        </Greeting>
      </div>
    </ThemeProvider>
  )
}

export default App
