import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'

const CartTotalContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: ${(props) => props.theme.fonts.sizes[props.size]};
  color: ${(props) => props.theme.colors[props.color]};
`

const CartTotalLine = styled('div')`
  position: absolute;
  top: 0;
  left: 1.5rem;
  right: 1.5rem;
  height: 0.1rem;
  background-color: ${(props) => props.theme.colors.border};
`

const CartTotal = ({
  title = 'Total',
  amount,
  size = 'large',
  color = 'text',
  style = null,
}) => {
  return (
    <>
      <CartTotalLine />
      <CartTotalContainer size={size} color={color} style={style}>
        <div>{title}</div>
        <div>{amount}</div>
      </CartTotalContainer>
    </>
  )
}

CartTotal.displayName = 'CartTotal'
CartTotal.propTypes = {
  title: propTypes.string,
  amount: propTypes.string,
  size: propTypes.string,
  color: propTypes.string,
  style: propTypes.object,
}

export default CartTotal
