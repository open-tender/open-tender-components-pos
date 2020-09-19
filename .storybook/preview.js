import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from '../src/GlobalStyles'
import { theme } from '../src/utils'

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="app">
        <Story />
      </div>
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
