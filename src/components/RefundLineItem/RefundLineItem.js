import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'

const RefundLineItemContainer = styled('span')`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${(props) => props.theme.fonts.sizes[props.size]};
  color: ${(props) => props.theme.colors[props.color]};
  padding: 0.6rem 0 0;

  &:nth-child(2) {
    padding: 0.2rem 0 0;
  }
`

const RefundLineItemName = styled('span')`
  display: block;
  flex: 0 0 40%;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const RefundLineItemQuantity = styled('span')`
  display: block;
  flex: 0 0 15%;
  text-align: right;
`

const RefundLineItemPrice = styled('span')`
  display: block;
  flex: 0 0 20%;
  text-align: right;
`

const RefundLineItemButton = styled('span')`
  display: block;
  flex: 0 0 25%;
  text-align: right;
`

const RefundLineItem = ({
  name,
  quantity,
  price,
  size = 'medium',
  color = 'text',
  style = null,
  children,
}) => {
  return (
    <RefundLineItemContainer size={size} color={color} style={style}>
      <RefundLineItemName>{name}</RefundLineItemName>
      <RefundLineItemQuantity>{quantity}</RefundLineItemQuantity>
      <RefundLineItemPrice>{price}</RefundLineItemPrice>
      <RefundLineItemButton>{children}</RefundLineItemButton>
    </RefundLineItemContainer>
  )
}

RefundLineItem.displayName = 'RefundLineItem'
RefundLineItem.propTypes = {
  name: propTypes.string,
  quantity: propTypes.oneOfType([propTypes.string, propTypes.node]),
  price: propTypes.string,
  size: propTypes.string,
  color: propTypes.string,
  style: propTypes.object,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default RefundLineItem
