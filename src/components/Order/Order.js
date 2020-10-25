import React from 'react'
import propTypes from 'prop-types'
import { Card, OrderHeader, OrderTickets, OrderFooter } from '..'

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
  printReceipt,
  printTickets,
  updateOrder,
  resetOrder,
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
      mainStyle={{ paddingRight: '0' }}
      footer={
        <OrderFooter
          order={order}
          doneOnPrint={doneOnPrint}
          printReceipt={printReceipt}
          printTickets={printTickets}
          updateOrder={updateOrder}
          resetOrder={resetOrder}
        />
      }
      footerStyle={{ paddingRight: '0' }}
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
  printReceipt: propTypes.func,
  printTickets: propTypes.func,
  updateOrder: propTypes.func,
  resetOrder: propTypes.func,
}

export default Order
