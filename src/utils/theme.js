export const fontSizes = {
  xxsmall: '1.2rem',
  xsmall: '1.4rem',
  small: '1.6rem',
  medium: '1.8rem',
  large: '2rem',
  xlarge: '2.2rem',
  xxlarge: '2.8rem',
}

export const colors = {
  bg1: '#090a0a',
  bg2: '#17191f',
  bg3: '#21252e',
  bg4: '#353945',
  // bg1: '#000000',
  // bg2: '#000000',
  // bg3: '#111111',
  // bg4: '#333333',
  primary: '#ffffff',
  secondary: '#979daf',
  link: '#5a5aff',
  error: '#eb2d5a',
  errorDark: '#430d15',
  alert: '#f8e405',
  success: '#20da6e',
  successDark: '#1cbc5f',
}

// const bg1 = '#090a0a'
// const bg2 = '#121233'
// const bg3 = '#353945'
// const bg4 = '#05050d'

const backgroundGradient = `linear-gradient(
    0deg,
    ${colors.bg3} 0%,
    ${colors.bg3} 85%,
    ${colors.bg2} 100%
  );`

const ellipsis = `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`

export const theme = {
  transition: 'all 0.15s ease',
  disabled: '0.25',
  ellipsis: ellipsis,
  datepicker: {
    arrowSize: '1.4rem',
  },
  layout: {
    padding: '3.0rem',
    paddingSmall: '2.0rem',
    headerHeight: '7.5rem',
    sidebarWidth: '30rem',
    cardWidth: '48rem',
    gutter: '0.5rem',
    bigButtonHeight: '7rem',
  },
  borderRadius: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
  },
  colors: {
    bg1: colors.bg1,
    bg2: colors.bg2,
    bg3: colors.bg3,
    bg4: colors.bg4,
    text: colors.primary,
    textSecondary: colors.secondary,
    border: '#444958',
    link: colors.link,
    success: colors.success,
    successDark: colors.successDark,
    alert: colors.alert,
    error: colors.error,
    errorDark: colors.errorDark,
    overlay: 'rgba(0, 0, 0, 0.8)',
  },
  backgrounds: {
    main: backgroundGradient,
  },
  fonts: {
    body: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: '400',
      fontStyle: 'normal',
      letterSpacing: '0.04em',
      color: colors.primary,
      fontSize: fontSizes.medium,
    },
    headings: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: '500',
      fontStyle: 'normal',
      lineHeight: '1.0',
      letterSpacing: '0.04em',
    },
    headingsStyle: `font-family: 'Roboto', sans-serif; font-weight: 500; font-style: normal; line-height: 1.0; letter-spacing: 0.04em;`,
    mono: {
      fontFamily: "'Akkurat Mono', monospace;",
      fontWeight: '400',
      fontStyle: 'normal',
      letterSpacing: '0.04em',
    },
    monoStyle: `font-family: 'Akkurat Mono', monospace; font-weight: 400; font-style: normal; letter-spacing: 0.04em;`,
    sizes: {
      mega: '4.8rem',
      h1: '3.0rem',
      h2: '2.6rem',
      h3: '2.2rem',
      h4: '2.0rem',
      h5: '1.8rem',
      h6: '1.6rem',
      ...fontSizes,
    },
  },
  buttons: {
    sizes: {
      link: {
        fontSize: 'inherit',
        padding: '0',
        height: 'auto',
      },
      xsmall: {
        fontSize: fontSizes.xxsmall,
        padding: '0.5em 0.5em',
        height: 'auto',
        // textTransform: 'uppercase',
      },
      small: {
        fontSize: fontSizes.small,
        padding: '0.7em 1.3em',
        height: 'auto',
      },
      medium: {
        fontSize: fontSizes.medium,
        padding: '0.7em 1.3em',
        height: 'auto',
      },
      large: {
        fontSize: fontSizes.xlarge,
        padding: '0.7em 1.3em',
      },
      xlarge: {
        fontSize: fontSizes.xlarge,
        padding: '0 0.7em',
        height: '7rem',
      },
      tall: {
        fontSize: fontSizes.medium,
        padding: '0 0.7em',
        height: '5rem',
      },
    },
    colors: {
      link: {
        color: colors.link,
        backgroundColor: 'transparent',
      },
      invisible: {
        color: colors.primary,
        backgroundColor: 'transparent',
      },
      primary: {
        color: colors.primary,
        backgroundColor: colors.bg4,
      },
      active: {
        color: colors.primary,
        backgroundColor: colors.link,
      },
      dark: {
        color: colors.primary,
        backgroundColor: colors.bg3,
      },
      error: {
        color: colors.primary,
        backgroundColor: colors.error,
      },
      success: {
        color: colors.primary,
        backgroundColor: colors.success,
      },
      successDark: {
        color: colors.primary,
        backgroundColor: colors.successDark,
      },
    },
  },
}
