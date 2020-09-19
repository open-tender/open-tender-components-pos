import React from 'react'

import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: 'Primary Button',
}

export const Small = Template.bind({})
Small.args = {
  text: 'Small Button',
  size: 'small',
}

export const Large = Template.bind({})
Large.args = {
  text: 'Large Button',
  size: 'large',
}
