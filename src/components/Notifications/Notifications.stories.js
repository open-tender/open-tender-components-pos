import React from 'react'
import { Notifications } from '.'

export default {
  title: 'Components/Notifications',
  component: Notifications,
}

const Template = (args) => <Notifications {...args} />

export const Primary = Template.bind({})
Primary.args = {
  messages: [{ message: 'This is a notification', id: '12345' }],
  hide: () => console.log('Hide me!'),
}
