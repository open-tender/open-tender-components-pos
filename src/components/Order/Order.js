import React from 'react'
import propTypes from 'prop-types'
import { Card, OrderHeader, OrderTickets } from '..'

const Order = ({
  order,
  itemTypes,
  isAssembly = false,
  expand = false,
  style = { padding: '0' },
}) => {
  return (
    <Card
      header={<OrderHeader order={order} />}
      main={
        <OrderTickets
          order={order}
          itemTypes={itemTypes}
          isAssembly={isAssembly}
          expand={expand}
        />
      }
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
  expand: propTypes.bool,
  style: propTypes.object,
}

export default Order
