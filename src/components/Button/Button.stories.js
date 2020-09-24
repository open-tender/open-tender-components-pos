import React from 'react'

import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: { actions: { argTypesRegex: '^on.*' } },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: 'Primary Button',
  onClick: () => console.log('Primary was clicked!'),
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

export const Error = Template.bind({})
Error.args = {
  text: 'Error Button',
  color: 'error',
}
