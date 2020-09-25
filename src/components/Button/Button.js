import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'

const ButtonStyled = styled('button')`
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  text-align: center;
  border: 0;
  margin: 0;
  letter-spacing: 0.04rem;
  border-radius: ${(props) => props.theme.borderRadius.small};
  padding: ${(props) => props.theme.buttons.sizes[props.size].padding};
  font-size: ${(props) => props.theme.buttons.sizes[props.size].fontSize};
  color: ${(props) => props.theme.buttons.colors[props.color].color};
  background-color: ${(props) =>
    props.theme.buttons.colors[props.color].backgroundColor};
  transition: ${(props) => props.theme.transition};

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Button = ({
  text,
  label,
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
    <ButtonStyled
      type="button"
      aria-label={label || text || null}
      onPointerUp={(evt) => onUp(evt)}
      disabled={disabled}
      size={size}
      color={color}
      style={style}
    >
      <span>{children || text}</span>
    </ButtonStyled>
  )
}

Button.displayName = 'Button'
Button.propTypes = {
  text: propTypes.string,
  label: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  disabled: propTypes.bool,
  onClick: propTypes.func,
  size: propTypes.string,
  color: propTypes.string,
  style: propTypes.object,
}

export default Button
