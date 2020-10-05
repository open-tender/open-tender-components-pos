import React from 'react'
import { FlexCentered } from '../FlexCentered'
import { Greeting } from './'

export default {
  title: 'Components/Greeting',
  component: Greeting,
}

const Template = (args) => (
  <FlexCentered>
    <Greeting {...args} />
  </FlexCentered>
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'This is a greeting!',
  children: (
    <>
      <p>{"Here's"} where the content will go.</p>
    </>
  ),
}
