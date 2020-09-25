import React from 'react'
import { ButtonGroup, Header } from '..'
import { ButtonHeader } from '.'
import { Home, ShoppingBag, Settings } from 'react-feather'

export default {
  title: 'Components/ButtonHeader',
  component: ButtonHeader,
}

const Template = (args) => (
  <Header>
    <ButtonGroup>
      <ButtonHeader {...args} />
    </ButtonGroup>
  </Header>
)

export const Primary = Template.bind({})
Primary.args = {
  onClick: () => console.log(`Clicked!`),
  children: 'Primary',
}

export const Active = Template.bind({})
Active.args = {
  onClick: () => console.log(`Clicked!`),
  children: 'Active',
  color: 'active',
}

const buttons = [
  { text: 'First' },
  { text: 'Second' },
  { text: 'Third', color: 'active' },
]

export const Group = () => (
  <Header>
    <ButtonGroup>
      {buttons.map((i) => (
        <ButtonHeader
          key={i.text}
          color={i.color}
          onClick={() => console.log(`${i.text} was clicked!`)}
        >
          {i.text}
        </ButtonHeader>
      ))}
    </ButtonGroup>
  </Header>
)

const icons = [
  { label: 'Home', icon: <Home size={18} /> },
  { label: 'Order', icon: <ShoppingBag size={18} /> },
  { label: 'Settings', icon: <Settings size={18} />, color: 'active' },
]

export const Icons = () => (
  <Header>
    <ButtonGroup minWidth={'4rem'}>
      {icons.map((i) => (
        <ButtonHeader
          key={i.label}
          label={i.label}
          color={i.color}
          onClick={() => console.log(`Clicked!`)}
        >
          {i.icon}
        </ButtonHeader>
      ))}
    </ButtonGroup>
  </Header>
)
