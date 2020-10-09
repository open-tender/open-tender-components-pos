import React from 'react'
import { Card, OrderHeader, OrderTickets, CartTotal } from '..'
import order from '../../assets/order.json'
import itemTypes from '../../assets/itemTypes.json'

export default {
  title: 'Components/Order',
  component: Card,
}

const webOrder = {
  customer: {
    first_name: 'Michael',
    last_name: 'Jordan',
    phone: '202-834-3641',
  },
  daily_id: '001',
  order_id: '8795436',
  channel: { type: 'PORTAL', ext_name: 'DoorDash' },
  totals: {
    total: '25.00',
  },
}

const Template = (args) => {
  return (
    <Card
      header={<OrderHeader order={args.order} />}
      main={
        <OrderTickets
          order={order}
          itemTypes={itemTypes}
          expand={args.expand}
        />
      }
      footer={<CartTotal amount={order.totals.total} />}
      style={{ padding: '2rem 0', margin: '0 auto' }}
    />
  )
}

export const WebCollapsed = Template.bind({})
WebCollapsed.args = {
  expand: false,
  order: webOrder,
}

export const WebExpanded = Template.bind({})
WebExpanded.args = {
  expand: true,
  order: webOrder,
}
