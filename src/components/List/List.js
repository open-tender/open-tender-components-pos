import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  makeChannelName,
  formatDollars,
  makeTicketCounts,
  orderTypeNamesMap,
  formatTimeList,
  timezoneMap,
} from '@open-tender/js'
import { Row, RowHeader, RowTable } from '..'
import { Maximize2 } from 'react-feather'
import { InfoList } from '../InfoList'

const ListContainer = styled('div')`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 0 ${(props) => props.theme.layout.paddingSmall} 0 0;
`

const RowContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const RowButtons = styled('div')`
  flex: 0 0 20rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Expand = styled('button')`
  position: absolute;
  z-index: 1;
  top: -0.2rem;
  right: -0.2rem;
  width: 4.4rem;
  padding: 1rem 1.2rem;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
`

const Completed = styled('span')`
  font-weight: 500;
  color: ${(props) => props.theme.colors.success};
`

const Void = styled('span')`
  font-weight: 500;
  color: ${(props) => props.theme.colors.error};
`

const NotApplicable = styled('span')`
  color: ${(props) => props.theme.colors.textSecondary};
`

const makeOrderStatus = (status, receipt_type) => {
  if (receipt_type === 'REFUND') return <Void>REFUNDED</Void>
  switch (status) {
    case 'CLOSED':
      return <Completed>{status}</Completed>
    case 'VOID':
      return <Void>{status}</Void>
    default:
      return status
  }
}

const makePrepStatus = (status, prep_status, receipt_type) => {
  if (status === 'VOID' || receipt_type === 'REFUND') {
    return <NotApplicable>n/a</NotApplicable>
  }
  switch (prep_status) {
    case 'COMPLETED':
      return <Completed>{prep_status}</Completed>
    case 'TODO':
      return 'In Queue'
    case 'IN_PROGRESS':
    case 'Done':
      return 'In Progress'
    default:
      return prep_status
  }
}

const makeOrder = (order, tz, itemTypes) => {
  const {
    daily_id,
    totals,
    requested_at,
    tickets,
    status,
    prep_status,
    receipt_type,
  } = order
  const ticketCounts = makeTicketCounts(tickets)
  const counts = itemTypes.map((i) => ticketCounts[i.item_type_id] || 0)
  const requestedAt = formatTimeList(requested_at, tz, true)
  const orderStatus = makeOrderStatus(status, receipt_type)
  const prepStatus = makePrepStatus(status, prep_status, receipt_type)
  return [
    `#${daily_id}`,
    formatDollars(totals.total),
    ...counts,
    requestedAt,
    orderStatus,
    prepStatus,
    ' ',
  ]
}

const makeHeaders = (itemTypes) => {
  const names = itemTypes.map((i) => i.name)
  return [...names, 'Promised', 'Status', 'Prep Status', ' ']
}

const widths = ['11.5%', '11.5%', '9%', '9%', '9%', '20%', '15%', '15%']

const List = ({
  orders = [],
  itemTypes = [],
  isAssembly = false,
  isPast = false,
  doneOnPrint = false,
  hideDelay = false,
  warningMinutes = 5,
  alertMinutes = 10,
  actions = {},
}) => {
  const headers = makeHeaders(itemTypes)
  const expand = (evt, order) => {
    evt.target.blur()
    evt.preventDefault()
    evt.stopPropagation()
  }
  return (
    <ListContainer>
      <TransitionGroup component={null}>
        {orders.map((order) => {
          const {
            order_id,
            order_type,
            order_uuid,
            customer,
            channel,
            cart,
            receipt_type,
            timezone,
          } = order
          const tz = timezoneMap[timezone]
          const orderType = order_type === 'MAIN_MENU' ? 'OLO' : order_type
          const orderId = order_id ? `#${order_id}` : 'N/A'
          const cartCount = cart.reduce((t, i) => t + i.quantity, 0)
          const itemsCount = `${cartCount} Items`
          // const buttons = makeButtons(order, print, refund)
          const rows = [makeOrder(order, tz, itemTypes)]
          const { first_name, last_name, phone } = customer || {}
          const customerName = first_name
            ? `${first_name} ${last_name}`
            : 'No Customer'
          const channelName = makeChannelName(channel)
          const infoItems =
            channelName === 'POS'
              ? [channelName, orderTypeNamesMap[orderType]]
              : phone
              ? [channelName, phone]
              : [channelName]
          const rowColor = receipt_type === 'REFUND' ? '#593749' : null
          const headerColor = receipt_type === 'REFUND' ? '#36111a' : null
          return (
            <CSSTransition
              key={order.order_uuid}
              classNames="fade-up"
              timeout={250}
            >
              <Row
                key={order_uuid}
                rowColor={rowColor}
                headerColor={headerColor}
                expand={
                  <Expand onPointerUp={(evt) => expand(evt, order)}>
                    <Maximize2 size={20} />
                  </Expand>
                }
                header={
                  <RowHeader title={customerName}>
                    <InfoList items={infoItems} />
                  </RowHeader>
                }
              >
                <RowContainer>
                  <div style={{ flex: '1 0 auto' }}>
                    <RowTable
                      headers={[orderId, itemsCount, ...headers]}
                      widths={widths}
                      rows={rows}
                    />
                  </div>
                  {/* <RowButtons>{buttons}</RowButtons> */}
                </RowContainer>
              </Row>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </ListContainer>
  )
}

List.displayName = 'List'
List.propTypes = {
  orders: propTypes.array,
  itemTypes: propTypes.array,
  tz: propTypes.string,
}

export default List
