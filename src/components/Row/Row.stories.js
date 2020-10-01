import React from 'react'
import { Row } from '.'
import { Content, Page, Section, RowHeader, InfoList } from '..'

export default {
  title: 'Components/Row',
  component: Row,
}

const Template = (args) => (
  <Content>
    <Page>
      <Section>
        <Row {...args} />
      </Section>
    </Page>
  </Content>
)

export const Punch = Template.bind({})
Punch.args = {
  header: (
    <RowHeader title="Employee Name">
      <InfoList items={['1111', 'Employee']} />
    </RowHeader>
  ),
  children: (
    <>
      <p>Content goes here</p>
    </>
  ),
}
