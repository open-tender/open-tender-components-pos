import React from 'react'
import propTypes from 'prop-types'
import { Button } from '..'

const defaultStyle = { height: '4rem', paddingTop: 0, paddingBottom: 0 }

const ButtonHeader = ({
  onClick,
  color = 'primary',
  style = {},
  text,
  label,
  disabled,
  isIcon = false,
  children,
}) => {
  const buttonStyle = { ...defaultStyle, ...style }
  return (
    <Button
      size="small"
      color={color}
      style={buttonStyle}
      onClick={onClick}
      text={text}
      label={text || label}
      disabled={disabled}
      isIcon={isIcon}
    >
      {text || children}
    </Button>
  )
}

ButtonHeader.displayName = 'ButtonHeader'
ButtonHeader.propTypes = {
  onClick: propTypes.func,
  color: propTypes.string,
  style: propTypes.object,
  text: propTypes.string,
  label: propTypes.string,
  disabled: propTypes.bool,
  isIcon: propTypes.bool,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default ButtonHeader
