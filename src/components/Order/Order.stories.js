import React from 'react'
import { Order } from '.'
// import { Card, OrderHeader, OrderTickets, CartTotal } from '..'
import order from '../../assets/order.json'
import itemTypes from '../../assets/itemTypes.json'

export default {
  title: 'Components/Order',
  component: Order,
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

const Template = (args) => <Order {...args} />

export const WebCollapsed = Template.bind({})
WebCollapsed.args = {
  order: { ...order, ...webOrder },
  itemTypes: itemTypes,
  isAssembly: false,
  expand: false,
  style: { padding: '2rem 0', margin: '0 auto' },
}

export const WebExpanded = Template.bind({})
WebExpanded.args = {
  order: { ...order, ...webOrder },
  itemTypes: itemTypes,
  isAssembly: false,
  expand: true,
  style: { padding: '2rem 0', margin: '0 auto' },
}
