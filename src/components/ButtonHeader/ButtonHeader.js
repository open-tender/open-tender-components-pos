import React from 'react'
import propTypes from 'prop-types'
import { Button } from '..'

const defaultStyle = { height: '4rem', paddingTop: 0, paddingBottom: 0 }

const ButtonHeader = ({
  onClick,
  color = 'primary',
  style = {},
  label,
  children,
}) => {
  const buttonStyle = { ...defaultStyle, ...style }
  return (
    <Button
      size="small"
      color={color}
      style={buttonStyle}
      onClick={onClick}
      label={label}
    >
      {children}
    </Button>
  )
}

ButtonHeader.displayName = 'ButtonHeader'
ButtonHeader.propTypes = {
  onClick: propTypes.func,
  color: propTypes.object,
  style: propTypes.object,
  label: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default ButtonHeader
