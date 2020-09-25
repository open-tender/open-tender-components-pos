import React from 'react'
import { FlexCentered } from '..'
import { Preface } from '.'

export default {
  title: 'Components/Preface',
  component: Preface,
}

const Template = (args) => (
  <FlexCentered>
    <Preface {...args} />
  </FlexCentered>
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'Preface text looks like this',
}
