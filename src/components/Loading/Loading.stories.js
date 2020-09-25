import React from 'react'
import { FlexCentered } from '..'
import { Loading } from '.'

export default {
  title: 'Components/Loading',
  component: Loading,
  parameters: { actions: { argTypesRegex: '^on.*' } },
}

const Template = (args) => (
  <FlexCentered>
    <Loading {...args} />
  </FlexCentered>
)

export const Centered = Template.bind({})
Centered.args = {
  msg: 'Loading something...',
}
