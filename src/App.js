import React from 'react'
// import logo from './logo.svg'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from './GlobalStyles'
import { theme } from './utils'
import { GreetingNew } from './components'
import Theme from './Theme'

const App = () => {
  return (
    <Theme>
      <div className="app">
        <GreetingNew title="Open Tender Component Library">
          <p>
            A set of reusable components used in the Open Tender POS and KDS
            apps.
          </p>
        </GreetingNew>
      </div>
    </Theme>
  )
}

export default App
