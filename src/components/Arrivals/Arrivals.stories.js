import React from 'react'
import { Arrivals } from '.'
import { Sidebar } from '..'

export default {
  title: 'Components/Arrivals',
  component: Arrivals,
}

const Template = (args) => (
  <Sidebar>
    <Arrivals {...args} />
  </Sidebar>
)

const customer = { first_name: 'Jennifer', last_name: 'Doe' }

const arrivals = [
  {
    order_id: 8547543,
    customer,
    vehicle_type: 'Lexus',
    vehicle_color: 'Black',
    vehicle_id: null,
    arrival_info: '2',
  },
  {
    order_id: 8547544,
    customer: null,
    vehicle_type: 'SUV',
    vehicle_color: 'Blue',
    vehicle_id: null,
    arrival_info: '1',
  },
  {
    order_id: 8547545,
    customer,
    vehicle_type: 'Sedan',
    vehicle_color: 'Dark Green',
    vehicle_id: 'FT4234',
    arrival_info: '3',
  },
]

export const Primary = Template.bind({})
Primary.args = {
  arrivals,
  dismiss: () => console.log('Hide me!'),
  print: () => console.log('Printed!'),
}
