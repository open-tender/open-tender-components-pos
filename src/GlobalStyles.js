import React from 'react'
import { css, Global } from '@emotion/core'
import { withTheme } from 'emotion-theming'
import AkkuratEot from './fonts/lineto-akkuratmono-regular.eot'
import AkkuratWoff from './fonts/lineto-akkuratmono-regular.woff'
import AkkuratWoff2 from './fonts/lineto-akkuratmono-regular.woff2'
import Roboto400Woff2 from './fonts/roboto-v20-latin-regular.woff2'
import Roboto400Woff from './fonts/roboto-v20-latin-regular.woff'
import Roboto500Woff2 from './fonts/roboto-v20-latin-500.woff2'
import Roboto500Woff from './fonts/roboto-v20-latin-500.woff'

// https://stackoverflow.com/questions/51637950/enable-global-theming-with-emotion

const makeGlobalStyles = (theme) => css`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: sans-serif;
    min-height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul,
  legend {
    margin: 0;
    padding: 0;
  }

  fieldset {
    padding: 0;
    border: 0;
    margin: 0;
  }

  input,
  textarea,
  select {
    -webkit-appearance: none;
  }

  input[type='search'] {
    -webkit-appearance: none;

    &::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
      display: none;
    }
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='submit'] {
    width: auto;
    cursor: pointer;
  }

  select {
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    cursor: pointer;
    appearance: none;
    background: transparent;
    border: none;
    padding: 0;
  }

  button:disabled {
    cursor: default;
  }

  button > * {
    pointer-events: none;
  }

  @font-face {
    font-family: 'Akkurat Mono';
    font-weight: normal;
    font-style: normal;
    src: url(${AkkuratEot});
    src: url(${AkkuratEot}) format('embedded-opentype'),
      url(${AkkuratWoff2}) format('woff2'), url(${AkkuratWoff}) format('woff');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'), local('Roboto-Regular'),
      url(${Roboto400Woff2}) format('woff2'),
      url(${Roboto400Woff}) format('woff');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: local('Roboto Medium'), local('Roboto-Medium'),
      url(${Roboto500Woff2}) format('woff2'),
      url(${Roboto500Woff}) format('woff');
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-family: ${theme.fonts.body.fontFamily};
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

  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(1rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .slide-up {
    opacity: 0;
    animation: slide-up 0.25s ease-in-out 0.125s forwards;
  }
`

const GlobalStyles = withTheme(({ theme }) => {
  console.log('theme', theme)
  return <Global styles={makeGlobalStyles(theme)} />
})

export default GlobalStyles
