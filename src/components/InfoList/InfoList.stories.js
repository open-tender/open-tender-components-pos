import React from 'react'
import { FlexCentered } from '../FlexCentered'
import { InfoList } from './'

export default {
  title: 'Components/InfoList',
  component: InfoList,
}

const Template = (args) => (
  <FlexCentered>
    <InfoList {...args} />
  </FlexCentered>
)

export const Primary = Template.bind({})
Primary.args = {
  items: [
    'Sept 22, 2020 9:57am',
    'POS-01',
    '10.10.59.62',
    'Chrome 85.0428.10.128',
  ],
}
