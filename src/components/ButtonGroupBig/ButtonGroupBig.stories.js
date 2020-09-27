import React from 'react'
import { FlexCentered, Button } from '..'
import { ButtonGroupBig } from '.'

export default {
  title: 'Components/ButtonGroupBig',
  component: ButtonGroupBig,
}

const buttons = [
  'First',
  'Second',
  'Third',
  'Fourth',
  'Fifth',
  'Sixth',
  'Seventh',
  'Eighth',
]

const Template = (args) => (
  <FlexCentered>
    <ButtonGroupBig {...args} />
  </FlexCentered>
)

export const Primary = Template.bind({})
Primary.args = {
  children: (
    <>
      {buttons.map((i) => (
        <div key={i}>
          <Button onClick={() => console.log(`${i} was clicked!`)}>{i}</Button>
        </div>
      ))}
    </>
  ),
}
