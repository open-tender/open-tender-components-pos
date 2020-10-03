import React from 'react'
import { FlexCentered, Button } from '..'
import { ButtonGroupVertical } from '.'

export default {
  title: 'Components/ButtonGroupVertical',
  component: ButtonGroupVertical,
}

const buttons = ['First', 'Second', 'Third']

const Template = (args) => (
  <FlexCentered>
    <ButtonGroupVertical {...args} />
  </FlexCentered>
)

export const Primary = Template.bind({})
Primary.args = {
  style: { minWidth: '32rem' },
  children: (
    <>
      {buttons.map((i) => (
        <Button key={i} onClick={() => console.log(`${i} was clicked!`)}>
          {i}
        </Button>
      ))}
    </>
  ),
}

export const Small = Template.bind({})
Small.args = {
  style: { minWidth: '32rem' },
  children: (
    <>
      {buttons.map((i) => (
        <Button
          key={i}
          size="small"
          onClick={() => console.log(`${i} was clicked!`)}
        >
          {i}
        </Button>
      ))}
    </>
  ),
}
