import React from 'react'
import propTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from './GlobalStyles'
import { theme } from './utils'

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

Theme.displayName = 'Theme'
Theme.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}
export default Theme
