import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import { isObjectEmpty } from '../../utils/helpers'
import { theme as defaultTheme } from '../../utils/theme'

const StyledButton = ({
  size = 'medium',
  color = 'primary',
  disabled,
  theme,
  style = {},
}) => {
  if (isObjectEmpty(theme)) {
    theme = defaultTheme
  }

  return {
    cursor: 'pointer',
    display: 'inline-block',
    lineHeight: 1,
    textAlign: 'center',
    border: 0,
    margin: 0,
    letterSpacing: '0.04rem',
    borderRadius: theme.borderRadius.small,
    padding: theme.buttons.sizes[size].padding,
    fontSize: theme.buttons.sizes[size].fontSize,
    color: theme.buttons.colors[color].color,
    backgroundColor: theme.buttons.colors[color].backgroundColor,
    transition: theme.transition,
    opacity: disabled && 0.25,
    ...style,
  }
}

const IGNORED_PROPS = []

const buttonConfig = {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop),
}

export const Button = styled('button', buttonConfig)(StyledButton)
