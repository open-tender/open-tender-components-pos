import React from 'react'
import { Table } from '.'
import { Content, Page, Section } from '..'
import { FlexCentered } from '../FlexCentered'

export default {
  title: 'Components/Table',
  component: Table,
}

const rows = [
  ['Management', '10:00am'],
  ['Management', '10:00am'],
  ['Management', '10:00am'],
  ['Management', '10:00am'],
]

// const Template = (args) => (
//   <Content>
//     <Page>
//       <Section>
//         <Table {...args} />
//       </Section>
//     </Page>
//   </Content>
// )

// export const TwoColumns = Template.bind({})
// TwoColumns.args = {
//   rows: rows,
// }

export const TwoColumns = () => (
  <Content>
    <Page>
      <Section>
        <FlexCentered>
          <Table rows={rows} style={{ width: '54rem' }} />
        </FlexCentered>
      </Section>
    </Page>
  </Content>
)
