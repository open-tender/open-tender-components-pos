import React from 'react'
import { loremIpsum } from '../../utils/helpers'
import Modal from './Modal'
import { ButtonGroup, Button } from '..'
import { ModalClose, ModalHeader, ModalBody, ModalFooter } from '.'

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: { actions: { argTypesRegex: '^on.*' } },
}

const Template = (args) => <Modal {...args} />

export const Open = Template.bind({})
Open.args = {
  show: true,
  loading: false,
  close: () => console.log('Closed!'),
  children: (
    <>
      <ModalClose close={() => console.log('Closed!')} />
      <ModalHeader
        title="I'm a modal!"
        subtitle="I can have a subtitle, too!"
      />
      <ModalBody>
        <div>
          <p>{loremIpsum.full}</p>
        </div>
        <div>
          <p>{loremIpsum.short}</p>
          <p>{loremIpsum.short}</p>
        </div>
      </ModalBody>
      <ModalFooter>
        <ButtonGroup>
          <Button
            text="Submit"
            color="active"
            onClick={() => console.log('Submit!')}
          />
          <Button
            text="Cancel"
            color="dark"
            onClick={() => console.log('Cancel!')}
          />
        </ButtonGroup>
      </ModalFooter>
    </>
  ),
}

export const Loading = Template.bind({})
Loading.args = {
  show: false,
  loading: true,
  close: () => console.log('Closed!'),
  children: (
    <div>
      <p>{loremIpsum.full}</p>
    </div>
  ),
}
