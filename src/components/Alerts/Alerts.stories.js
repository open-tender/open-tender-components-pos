import React from 'react'
import { Alerts } from '.'

export default {
  title: 'Components/Alerts',
  component: Alerts,
}

const Template = (args) => <Alerts {...args} />

export const Primary = Template.bind({})
Primary.args = {
  alerts: [{ message: 'This is a notification', id: '12345' }],
  dismiss: () => console.log('Hide me!'),
}
