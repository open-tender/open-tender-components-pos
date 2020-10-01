import React from 'react'
import { Row } from '.'
import {
  Content,
  Page,
  Section,
  RowHeader,
  InfoList,
  RowTable,
  Button,
} from '..'

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

const punchOut = (
  <Button
    text="Punch Out"
    size="xsmall"
    color="active"
    // style={{ padding: '0.3em 0.5em' }}
    onClick={() => console.log('Punched out')}
  />
)

const headers = [
  'Department',
  'Punch In',
  'Punch Out',
  'Time On Clock',
  'Time On Break',
  ' ',
]
const width = '18%'
const widths = [width, width, width, width, width, '10%']
const rows = [
  ['Management', '10:00am', '3:00pm', '5:00', '0:00', ' '],
  ['Management', '10:00am', '3:00pm', '4:30', '0:30', ' '],
  ['Management', '10:00am', 'On Clock', '4:30', '0:30', punchOut],
  ['Management', '10:00am', 'On Break', '4:30', '0:30', ' '],
]

export const Punch = Template.bind({})
Punch.args = {
  header: (
    <RowHeader title="Employee Name">
      <InfoList items={['1111', 'Employee']} />
    </RowHeader>
  ),
  children: <RowTable headers={headers} rows={rows} widths={widths} />,
}
