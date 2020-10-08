import React from 'react'
import { Card, OrderHeader, CartLineItem } from '..'
import { Content } from '../Content'
import { FlexCentered } from '../FlexCentered'
import order from '../../assets/order.json'
import itemTypes from '../../assets/itemTypes.json'
import { OrderTickets } from '../OrderTickets'

export default {
  title: 'Components/Order',
  component: Card,
}

const items = (
  <>
    <CartLineItem
      name="Some Menu Item"
      quantity="x 2"
      price="$12.00"
      style={{ padding: '0 0 0.2rem' }}
    />
    <CartLineItem
      name="Some Other Item"
      quantity="x 2"
      price="$12.00"
      style={{ padding: '0 0 0.2rem' }}
    />
  </>
)

// const order = JSON.parse(orderData)

const Template = (args) => {
  console.log(order)
  console.log(itemTypes)
  return (
    <Content>
      <FlexCentered>
        <Card
          header={<OrderHeader {...args} />}
          main={
            <OrderTickets order={order} itemTypes={itemTypes} expand={false} />
          }
          footer={<p>Footer goes here</p>}
        />
      </FlexCentered>
    </Content>
  )
}

export const Web = Template.bind({})
Web.args = {
  order: {
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
  },
}
