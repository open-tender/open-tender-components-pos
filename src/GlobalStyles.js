import React from 'react'
import { css, Global } from '@emotion/core'
import { withTheme } from 'emotion-theming'

// https://stackoverflow.com/questions/51637950/enable-global-theming-with-emotion

const makeGlobalStyles = (theme) => css`
  html,
  body,
  #root {
    height: 100%;
  }
  body {
    font-family: ${theme.fonts.body.family};
    font-weight: ${theme.fonts.body.fontWeight};
    font-style: ${theme.fonts.body.fontStyle};
    letter-spacing: ${theme.fonts.body.letterSpacing};
    color: ${theme.fonts.body.color};
    font-size: ${theme.fonts.body.fontSize};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background: ${theme.backgrounds.bg3};
    background: ${theme.backgrounds.bgGradient};
  }
`

const GlobalStyles = withTheme(({ theme }) => (
  <Global styles={makeGlobalStyles(theme)} />
))

export default GlobalStyles
