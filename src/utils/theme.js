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
  primary: '#ffffff',
  link: '#5a5aff',
  error: '#eb2d5a',
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

export const theme = {
  transition: 'all 0.15s ease',
  layout: {
    headerHeight: '7.5rem',
    padding: '3.0rem',
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
    border: '#444958',
  },
  gradients: {
    primary: backgroundGradient,
  },
  fonts: {
    body: {
      fontFamily: "'Roboto', Georgia",
      fontWeight: '400',
      fontStyle: 'normal',
      color: colors.primary,
      letterSpacing: '0.04em',
      fontSize: fontSizes.medium,
    },
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
      small: {
        fontSize: fontSizes.small,
        padding: '0.7em 1.3em',
      },
      medium: {
        fontSize: fontSizes.medium,
        padding: '0.7em 1.3em',
      },
      large: {
        fontSize: fontSizes.xlarge,
        padding: '1.1em 0.7em',
      },
    },
    colors: {
      primary: {
        color: colors.primary,
        backgroundColor: colors.bg4,
      },
      active: {
        color: colors.primary,
        backgroundColor: colors.link,
      },
      error: {
        color: colors.primary,
        backgroundColor: colors.error,
      },
    },
  },
}
