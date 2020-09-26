import React from 'react'
import { Numpad } from '.'
import { FlexCentered } from '..'

export default {
  title: 'Components/Numpad',
  component: Numpad,
}

const Template = (args) => (
  <FlexCentered>
    <Numpad {...args} />
  </FlexCentered>
)

export const WithParams = Template.bind({})
WithParams.args = {}
