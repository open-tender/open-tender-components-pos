import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'

const CartLineItemContainer = styled('span')`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.1;
  font-size: ${(props) => props.theme.fonts.sizes[props.size]};
  color: ${(props) => props.theme.colors[props.color]};
`

const CartLineItemName = styled('span')`
  display: block;
  flex: 0 0 60%;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const CartLineItemQuantity = styled('span')`
  display: block;
  flex: 0 0 15%;
  text-align: right;
`

const CartLineItemPrice = styled('span')`
  display: block;
  flex: 0 0 25%;
  text-align: right;
`

const CartLineItem = ({
  name,
  quantity,
  price,
  size = 'medium',
  color = 'text',
  style = null,
}) => {
  return (
    <CartLineItemContainer size={size} color={color} style={style}>
      <CartLineItemName>{name}</CartLineItemName>
      <CartLineItemQuantity>{quantity}</CartLineItemQuantity>
      <CartLineItemPrice>{price}</CartLineItemPrice>
    </CartLineItemContainer>
  )
}

CartLineItem.displayName = 'CartLineItem'
CartLineItem.propTypes = {
  name: propTypes.string,
  quantity: propTypes.oneOfType([propTypes.string, propTypes.node]),
  price: propTypes.string,
  size: propTypes.string,
  color: propTypes.string,
  style: propTypes.object,
}

export default CartLineItem
