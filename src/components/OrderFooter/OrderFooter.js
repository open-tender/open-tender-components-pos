import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { OrderButtons } from '.'

const OrderFooterContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  printReceipt,
  printTickets,
  updateOrder,
  resetOrder,
  style = null,
}) => {
  return (
    <>
      <OrderFooterLine />
      <OrderFooterContainer style={style}>
        <div>Button</div>
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
  printReceipt: propTypes.func,
  printTickets: propTypes.func,
  updateOrder: propTypes.func,
  resetOrder: propTypes.func,
  style: propTypes.object,
}

export default OrderFooter
