import React from 'react'
import { Keypad } from '.'
import { Content, FlexCentered, Greeting } from '..'
import {
  buttonsNumpad,
  reduceNumpad,
  buttonsCheckout,
  reduceCheckout,
  buttonsKeypad,
  reduceKeypad,
  buttonsDollars,
  reduceDollars,
} from '@open-tender/js'

export default {
  title: 'Components/Keypad',
  component: Keypad,
}

const Template = (args) => (
  <Content>
    <FlexCentered>
      <Greeting>
        <Keypad {...args} />
      </Greeting>
    </FlexCentered>
  </Content>
)

export const Numpad = Template.bind({})
Numpad.args = {
  buttons: buttonsNumpad,
  value: '',
  setValue: (value) => console.log(`Value is: ${value}`),
  reduceValue: reduceNumpad,
  width: '30rem',
}

export const Dollars = Template.bind({})
Dollars.args = {
  buttons: buttonsDollars,
  value: '0.00',
  setValue: (value) => console.log(`Value is: ${value}`),
  reduceValue: reduceDollars,
  width: '30rem',
  textAlign: 'right',
}

export const Checkout = Template.bind({})
Checkout.args = {
  buttons: buttonsCheckout,
  value: '20.00',
  setValue: (value) => console.log(`Value is: ${value}`),
  reduceValue: reduceCheckout,
  width: '40rem',
  textAlign: 'right',
}

export const Keyboard = Template.bind({})
Keyboard.args = {
  buttons: buttonsKeypad,
  value: '',
  setValue: (value) => console.log(`Value is: ${value}`),
  reduceValue: reduceKeypad,
  width: '72rem',
}

export const KeyboardWithSpacebar = Template.bind({})
KeyboardWithSpacebar.args = {
  buttons: buttonsKeypad,
  value: '',
  setValue: (value) => console.log(`Value is: ${value}`),
  reduceValue: reduceKeypad,
  width: '72rem',
  includeSpacebar: true,
}
