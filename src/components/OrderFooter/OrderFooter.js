import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { OrderButtons, OrderActions } from '.'

const OrderFooterContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0 1.5rem ${(props) => props.theme.layout.paddingSmall};
`

const OrderFooterLine = styled('div')`
  position: absolute;
  top: 0;
  left: ${(props) => props.theme.layout.paddingSmall};
  right: ${(props) => props.theme.layout.paddingSmall};
  height: 0.1rem;
  background-color: ${(props) => props.theme.colors.border};
`

const OrderFooter = ({
  order,
  doneOnPrint,
  hideDelay,
  printReceipt,
  printTickets,
  updateOrder,
  resetOrder,
  delayOrder,
  fireOrder,
  style = null,
}) => {
  return (
    <>
      <OrderFooterLine />
      <OrderFooterContainer style={style}>
        <OrderActions
          order={order}
          doneOnPrint={doneOnPrint}
          hideDelay={hideDelay}
          updateOrder={updateOrder}
          resetOrder={resetOrder}
          delayOrder={delayOrder}
          fireOrder={fireOrder}
        />
        <OrderButtons
          order={order}
          doneOnPrint={doneOnPrint}
          printReceipt={printReceipt}
          printTickets={printTickets}
          updateOrder={updateOrder}
          resetOrder={resetOrder}
        />
      </OrderFooterContainer>
    </>
  )
}

OrderFooter.displayName = 'OrderFooter'
OrderFooter.propTypes = {
  order: propTypes.object,
  doneOnPrint: propTypes.bool,
  hideDelay: propTypes.bool,
  printReceipt: propTypes.func,
  printTickets: propTypes.func,
  updateOrder: propTypes.func,
  resetOrder: propTypes.func,
  delayOrder: propTypes.func,
  fireOrder: propTypes.func,
  style: propTypes.object,
}

export default OrderFooter
