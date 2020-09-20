import React from 'react'
import { Header } from './'

export default {
  title: 'Components/Header',
  component: Header,
}

const Template = (args) => <Header {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: (
    <>
      <div>
        <p>Left content</p>
      </div>
      <div>
        <p>Right content</p>
      </div>
    </>
  ),
}
