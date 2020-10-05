import React from 'react'
import { FlexCentered } from '../FlexCentered'
import { OfflineStatus } from '.'

export default {
  title: 'Components/OfflineStatus',
  component: OfflineStatus,
}

const Template = (args) => (
  <FlexCentered>
    <OfflineStatus {...args} />
  </FlexCentered>
)

export const Online = Template.bind({})
Online.args = { isOffline: false }

export const Offline = Template.bind({})
Offline.args = { isOffline: true }
