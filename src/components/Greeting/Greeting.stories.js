import React from 'react'
import { Greeting } from './'

export default {
  title: 'Components/Greeting',
  component: Greeting,
}

const Template = (args) => <Greeting {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'This is a greeting!',
  children: (
    <>
      <p>Here's where the content will go.</p>
    </>
  ),
}
