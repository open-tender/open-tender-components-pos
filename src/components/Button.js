import React from 'react'
import propTypes from 'prop-types'

const Button = ({ text, onClick }) => {
  const handleClick = (evt) => {
    evt.preventDefault()
    onClick ? onClick() : console.log('Clicked!')
    evt.target.blur()
  }

  return <button onClick={handleClick}>{text}</button>
}

Button.displayName = 'Button'
Button.propTypes = {
  text: propTypes.string,
  onClick: propTypes.func,
}

export default Button
