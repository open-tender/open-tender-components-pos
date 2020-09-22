import React from 'react'
import { Button } from '..'
import { ButtonGroup } from '.'

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
}

const buttons = ['First', 'Second', 'Third']

const Template = (args) => <ButtonGroup {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: (
    <>
      {buttons.map((i) => (
        <Button onClick={() => console.log(`${i} was clicked!`)}>{i}</Button>
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
        <Button size="small" onClick={() => console.log(`${i} was clicked!`)}>
          {i}
        </Button>
      ))}
    </>
  ),
}
