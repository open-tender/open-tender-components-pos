import React from 'react'
import { FlexCentered } from '.'

export default {
  title: 'Components/FlexCentered',
  component: FlexCentered,
}

const Template = (args) => <FlexCentered {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: (
    <div>
      <p>Centered content goes here.</p>
    </div>
  ),
}
