import React from 'react'
import propTypes from 'prop-types'
import { Maximize2, Minimize2 } from 'react-feather'
import { Button, Icon } from '..'
import styled from '@emotion/styled'

const OrderExpandContainer = styled('div')`
  position: absolute;
  z-index: 1;
  top: -0.3rem;
  right: -0.5rem;
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
          <Icon width="2.0rem" height="2.0rem">
            <Minimize2 size={20} />
          </Icon>
        </Button>
      ) : (
        <Button onClick={() => openOrder(order)}>
          <Icon width="2.0rem" height="2.0rem">
            <Maximize2 size={20} />
          </Icon>
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
