import React from 'react'
import { Card } from '.'
import { CartLineItem } from '..'

export default {
  title: 'Components/Card',
  component: Card,
}

const Template = (args) => <Card {...args} />

export const Cart = Template.bind({})
Cart.args = {
  header: <p>Header goes here</p>,
  main: (
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
  ),
  footer: <p>Footer goes here</p>,
}
