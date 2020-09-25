import React from 'react'
import { ErrorPage } from '.'

export default {
  title: 'Components/ErrorPage',
  component: ErrorPage,
}

const Template = (args) => <ErrorPage {...args} />

export const Primary = Template.bind({})
Primary.args = {
  error: new Error('Something went wrong. Very wrong.'),
  errorInfo: { title: 'Unexpected Error', detail: 'Something went wrong' },
  logError: (err, extra) => console.log(err.message),
  reload: () => window.location.reload(true),
}
