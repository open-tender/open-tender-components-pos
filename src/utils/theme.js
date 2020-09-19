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
  primary: '#ffffff',
  error: '#eb2d5a',
}

const bg1 = '#090a0a'
const bg2 = '#17191f'
const bg3 = '#21252e'
const bg4 = '#353945'

// const bg1 = '#090a0a'
// const bg2 = '#121233'
// const bg3 = '#353945'
// const bg4 = '#05050d'

const backgroundGradient = `linear-gradient(
    0deg,
    ${bg3} 0%,
    ${bg3} 85%,
    ${bg2} 100%
  );`

export const theme = {
  backgrounds: {
    bg1: bg1,
    bg2: bg2,
    bg3: bg3,
    bg4: bg4,
    bgGradient: backgroundGradient,
  },
  fonts: {
    body: {
      family: "'Roboto', sans-serif",
      fontWeight: '400',
      fontStyle: 'normal',
      color: colors.primary,
      letterSpacing: '0.04em',
      fontSize: fontSizes.medium,
    },
  },
  borderRadius: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
  },
  transition: 'all 0.15s ease',
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
        backgroundColor: bg4,
      },
      error: {
        color: colors.primary,
        backgroundColor: colors.error,
      },
    },
  },
}
