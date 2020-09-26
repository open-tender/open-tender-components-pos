import React from 'react'
import { css, Global } from '@emotion/core'
import { withTheme } from 'emotion-theming'

// https://stackoverflow.com/questions/51637950/enable-global-theming-with-emotion
// how to inject fonts - WASN'T WORKING IN CONSUMING APP
// https://github.com/emotion-js/emotion/issues/984

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
    width: 100%;
    line-height: 1;
    outline: none;
    padding: 1.6rem 1.75rem 1.5rem;
    border: 0;
    border-radius: ${theme.borderRadius.small};
    font-family: ${theme.fonts.mono.fontFamily};
    font-size: ${theme.fonts.sizes.large};
    color: ${theme.colors.text};
    background-color: ${theme.colors.bg1};
    transition: ${theme.transition};

    &::placeholder {
      color: ${theme.colors.text};
      opacity: 0.5;
    }

    &::selection {
      color: ${theme.colors.text};
      background-color: ${theme.colors.bg3};
    }

    &:active,
    &:focus {
      color: ${theme.colors.text};
      background-color: ${theme.colors.bg1};
    }

    &:disabled {
      cursor: default;
      opacity: 0.5;
      color: ${theme.colors.text};
      background-color: ${theme.colors.bg1};
    }
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
    position: relative;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
  }

  select:read-only {
    opacity: 1;
  }

  textarea {
    height: 5em;
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.headings.fontFamily};
    font-weight: ${theme.fonts.headings.fontWeight};
    font-style: ${theme.fonts.headings.fontStyle};
    letter-spacing: ${theme.fonts.headings.letterSpacing};
    line-height: ${theme.fonts.headings.lineHeight};
  }

  a,
  button {
    outline: none;
    transition: ${theme.transition};
  }

  a {
    text-decoration: none;
    color: ${theme.fonts.body.color};
  }

  pre {
    text-align: left;
    line-height: 1.5;
  }

  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background: ${theme.colors.bg3};
    background: ${theme.backgrounds.main};
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

  .md-enter,
  .md-exit.md-exit-active {
    transition: all 0.25s ease;
    opacity: 0;
    visibility: hidden;

    & > div {
      transition: all 0.25s ease;
      transform: translateY(10%);
    }
  }

  .md-enter.md-enter-active,
  .md-exit {
    opacity: 1;
    visibility: visible;

    & > div {
      transform: translateY(0);
    }
  }

  .flash-enter {
    opacity: 0;
    transform: translateY(20%);
  }

  .flash-enter-active {
    opacity: 1;
    transform: translateY(0);
  }

  .flash-exit {
    opacity: 1;
    transform: translateY(0);
  }

  .flash-exit-active {
    opacity: 0;
    transform: translateY(-20%);
  }
`

const GlobalStyles = withTheme(({ theme }) => {
  return <Global styles={makeGlobalStyles(theme)} />
})

export default GlobalStyles
