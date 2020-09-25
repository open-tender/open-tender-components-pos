import React from 'react'
import { FlexCentered } from '..'
import { LoadingLogo } from '.'

export default {
  title: 'Components/LoadingLogo',
  component: LoadingLogo,
}

const Template = (args) => (
  <FlexCentered>
    <LoadingLogo {...args} />
  </FlexCentered>
)

export const Centered = Template.bind({})
