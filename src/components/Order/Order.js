import React from 'react'
import propTypes from 'prop-types'
import { Card, OrderHeader, OrderTickets } from '..'

const Order = ({
  order,
  itemTypes,
  isAssembly = false,
  isPast = false,
  doneOnPrint = false,
  isOpen = false,
  expand = false,
  style = { padding: '0' },
  openOrder,
  closeOrder,
  printTicket,
  updateTicket,
  refreshCompletedOrders,
  showNotification,
}) => {
  return (
    <Card
      header={
        <OrderHeader
          order={order}
          isOpen={isOpen}
          openOrder={openOrder}
          closeOrder={closeOrder}
        />
      }
      main={
        <OrderTickets
          order={order}
          itemTypes={itemTypes}
          isAssembly={isAssembly}
          isPast={isPast}
          isOpen={isOpen}
          doneOnPrint={doneOnPrint}
          expand={expand}
          printTicket={printTicket}
          updateTicket={updateTicket}
          refreshCompletedOrders={refreshCompletedOrders}
          showNotification={showNotification}
        />
      }
      mainPadding={`padding-right: 0;`}
      // footer={<OrderFooter order={order} />}
      style={style}
    />
  )
}

Order.displayName = 'Order'
Order.propTypes = {
  order: propTypes.object,
  itemTypes: propTypes.array,
  isAssembly: propTypes.bool,
  isPast: propTypes.bool,
  doneOnPrint: propTypes.bool,
  isOpen: propTypes.bool,
  expand: propTypes.bool,
  style: propTypes.object,
  openOrder: propTypes.func,
  closeOrder: propTypes.func,
  printTicket: propTypes.func,
  updateTicket: propTypes.func,
  refreshCompletedOrders: propTypes.func,
  showNotification: propTypes.func,
}

export default Order
