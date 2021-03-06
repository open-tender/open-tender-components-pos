import React from 'react'
import { FlexCentered, Button } from '..'
import { ButtonGroup } from '.'

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
}

const buttons = ['First', 'Second', 'Third']

const Template = (args) => (
  <FlexCentered>
    <ButtonGroup {...args} />
  </FlexCentered>
)

export const Primary = Template.bind({})
Primary.args = {
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
  minWidth: '8rem',
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
