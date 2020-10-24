import React from 'react'
import { Sidebar } from '.'
import { Main, Bucket } from '..'

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
}

const Template = (args) => (
  <Main hasSidebar={true}>
    <Sidebar {...args} />
  </Main>
)

export const AllClear = Template.bind({})
AllClear.args = {
  children: (
    <>
      <Bucket
        title="All Clear"
        color="success"
        orderCount={0}
        itemCounts={[['Entree', 0]]}
      />
    </>
  ),
}

export const UpcomingOrders = Template.bind({})
UpcomingOrders.args = {
  children: (
    <>
      <Bucket
        title="11:45"
        color="warning"
        orderCount={2}
        itemCounts={[['Entree', 5]]}
      />
      <Bucket
        title="12:00"
        color="alert"
        orderCount={5}
        itemCounts={[['Entree', 13]]}
      />
      <Bucket
        title="12:15"
        color="text"
        orderCount={5}
        itemCounts={[['Entree', 13]]}
      />
      <Bucket
        title="12:30"
        color="text"
        orderCount={5}
        itemCounts={[['Entree', 13]]}
      />
    </>
  ),
}
