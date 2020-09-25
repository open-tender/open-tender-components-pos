import React from 'react'
import { ErrorMessage } from '.'
import { FlexCentered } from '..'

export default {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
}

const Template = (args) => (
  <FlexCentered>
    <ErrorMessage {...args} />
  </FlexCentered>
)

export const WithParams = Template.bind({})
WithParams.args = {
  error: {
    title: 'Something went wrong',
    detail: 'This is all your fault. You suck.',
    params: { '$.field': 'This field is totally f-ed!' },
  },
}
