import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { GlobalStyles, Main, Content } from '../src'
import { theme } from '../src/utils'
import '../src/App.scss'

// Global decorator to apply the styles to all stories
// https://www.learnstorybook.com/design-systems-for-developers/react/en/build/
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="app">
        <Main>
          <Story />
        </Main>
      </div>
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
