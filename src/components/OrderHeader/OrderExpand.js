import React from 'react'
import propTypes from 'prop-types'
import { Maximize2, Minimize2 } from 'react-feather'
import { Button } from '..'
import styled from '@emotion/styled'

const OrderExpandContainer = styled('div')`
  position: absolute;
  z-index: 1;
  top: -0.3rem;
  right: -0.2rem;
  width: 4.4rem;
  text-align: center;

  button {
    padding: 1rem 1.2rem;
    background-color: transparent;
  }
`

const OrderExpand = ({ order, isOpen = false, openOrder, closeOrder }) => {
  return (
    <OrderExpandContainer>
      {isOpen ? (
        <Button onClick={closeOrder}>
          <Minimize2 size={20} />
        </Button>
      ) : (
        <Button onClick={() => openOrder(order)}>
          <Maximize2 size={20} />
        </Button>
      )}
    </OrderExpandContainer>
  )
}

OrderExpand.displayName = 'OrderExpand'
OrderExpand.propTypes = {
  order: propTypes.object,
  isOpen: propTypes.bool,
  openOrder: propTypes.func,
  closeOrder: propTypes.func,
}

export default OrderExpand
