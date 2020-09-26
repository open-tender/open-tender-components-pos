import React from 'react'
import { FlexCentered } from '..'
import { LoadingLogo } from '.'
import logo from '../../assets/logo.png'

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
Centered.args = {
  logo: logo,
}
