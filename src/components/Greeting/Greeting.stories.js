import React from 'react'
import { Greeting } from './'

export default {
  title: 'Components/Greeting',
  component: Greeting,
}

// export const greeting = () => {
//   return (
//     <Greeting title="Hi there">
//       <p>Here's where the content will go.</p>
//     </Greeting>
//   )
// }

const Template = (args) => <Greeting {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Primary Greeting',
  children: <p>Here's where the content will go.</p>,
}

// export const Small = Template.bind({})
// Small.args = {
//   text: 'Small Button',
//   size: 'small',
// }

// export const Large = Template.bind({})
// Large.args = {
//   text: 'Large Button',
//   size: 'large',
// }
