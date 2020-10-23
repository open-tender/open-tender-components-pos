import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { Button } from '..'
import { Minus, Plus } from 'react-feather'

const RefundQuantityContainer = styled('div')`
  display: flex;
  align-items: center;
  padding: 0 0 0 4rem;

  button {
    display: block;
    padding: 0;
    width: 3rem;
    height: 3rem;
    border-radius: 1.5rem;
  }
`

const RefundQuantityCount = styled('div')`
  flex-grow: 1;
  text-align: center;
`

const RefundQuantity = ({ quantity, refundQuantity, increment, decrement }) => {
  return (
    <RefundQuantityContainer>
      <Button
        onClick={decrement}
        label="Remove one"
        color="active"
        disabled={refundQuantity === 0}
      >
        <Minus size={18} />
      </Button>
      <RefundQuantityCount>{refundQuantity}</RefundQuantityCount>
      <Button
        onClick={increment}
        label="Add one"
        color="active"
        disabled={refundQuantity >= quantity}
      >
        <Plus size={18} />
      </Button>
    </RefundQuantityContainer>
  )
}

RefundQuantity.displayName = 'RefundItem'
RefundQuantity.propTypes = {
  quantity: propTypes.number,
  refundQuantity: propTypes.number,
  increment: propTypes.func,
  decrement: propTypes.func,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default RefundQuantity
