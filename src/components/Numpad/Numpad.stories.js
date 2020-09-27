import React from 'react'
import { Numpad } from '.'
import { Content, FlexCentered, Greeting } from '..'
import {
  buttonsNumpad,
  reduceNumpad,
  buttonsCheckout,
  reduceCheckout,
} from '@open-tender/js'

export default {
  title: 'Components/Numpad',
  component: Numpad,
}

const Template = (args) => (
  <Content>
    <FlexCentered>
      <Greeting>
        <Numpad {...args} />
      </Greeting>
    </FlexCentered>
  </Content>
)

export const Standard = Template.bind({})
Standard.args = {
  buttons: buttonsNumpad,
  value: '',
  setValue: (value) => console.log(`Value is: ${value}`),
  reduceValue: reduceNumpad,
  width: '30rem',
}

export const Checkout = Template.bind({})
Checkout.args = {
  buttons: buttonsCheckout,
  value: '20.00',
  setValue: (value) => console.log(`Value is: ${value}`),
  reduceValue: reduceCheckout,
  width: '40rem',
}
