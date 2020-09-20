import React from 'react'
import propTypes from 'prop-types'
import { Button as StyledButton } from './styledButton'

const Button = ({
  text,
  ariaLabel,
  children,
  disabled,
  onClick,
  size = 'medium',
  color = 'primary',
  style = null,
}) => {
  const onUp = (evt) => {
    evt.target.blur()
    evt.preventDefault()
    evt.stopPropagation()
    onClick()
  }

  return (
    <StyledButton
      type="button"
      aria-label={ariaLabel || text || null}
      onPointerUp={(evt) => onUp(evt)}
      disabled={disabled}
      size={size}
      color={color}
      style={style}
    >
      {children || text}
    </StyledButton>
  )
}

Button.displayName = 'Button'
Button.propTypes = {
  text: propTypes.string,
  ariaLabel: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  disabled: propTypes.bool,
  onClick: propTypes.func,
  className: propTypes.string,
}

export default Button
