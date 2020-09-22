import React from 'react'
import { Header } from '..'
import { FlexContainer } from '.'

export default {
  title: 'Components/FlexContainer',
  component: FlexContainer,
}

const Template = (args) => <FlexContainer {...args} />

export const Standalone = Template.bind({})
Standalone.args = {
  children: (
    <>
      <div>
        <p>First content</p>
      </div>
      <div>
        <p>Second conent</p>
      </div>
    </>
  ),
}

export const InHeader = () => {
  return (
    <Header>
      <FlexContainer>
        <div>
          <p>First content</p>
        </div>
        <div>
          <p>Second conent</p>
        </div>
      </FlexContainer>
      <FlexContainer>
        <div>
          <p>First content</p>
        </div>
        <div>
          <p>Second conent</p>
        </div>
      </FlexContainer>
    </Header>
  )
}
