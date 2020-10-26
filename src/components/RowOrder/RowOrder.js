import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { formatDollars, makeTicketCounts } from '@open-tender/js'
import { OrderPromised, Preface, OrderButtons, OrderActions } from '..'

const RowOrderContainer = styled('div')`
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const RowOrderLabel = styled('div')`
  margin: 0 0 0.3rem;
`

const RowOrderIds = styled('div')`
  flex: 0 0 6%;
  margin-right: 3%;
`

const RowOrderTotals = styled('div')`
  flex: 0 0 6%;
  margin-right: 3%;
`

const RowTicketCounts = styled('div')`
  flex: 0 0 12%;
  margin-right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
`

const RowPromised = styled('div')`
  flex: 0 0 43%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;

  > div {
    margin: 0;
  }

  > div > p {
    color: ${(props) => props.theme.colors.textSecondary};
    text-align: left;
  }

  > div > div > p {
    font-size: ${(props) => props.theme.fonts.sizes.medium};
    line-height: inherit;
    text-align: left;
    letter-spacing: 0.04em;
    font-weight: normal;
  }
`

const RowOrderButtons = styled('div')`
  flex: 0 0 22%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  div:last-of-type {
    margin: 0 0 0 1.5rem;
  }
`

const RowOrder = ({
  order,
  itemTypes,
  doneOnPrint = false,
  hideDelay = false,
  warningMinutes = 5,
  alertMinutes = 10,
  style = null,
  updateOrder,
  resetOrder,
  delayOrder,
  fireOrder,
  printReceipt,
  printTickets,
}) => {
  const { daily_id, order_id, tickets, cart, totals } = order
  const orderId = order_id ? `#${order_id}` : 'N/A'
  const cartCount = cart.reduce((t, i) => t + i.quantity, 0)
  const ticketCounts = makeTicketCounts(tickets)
  return (
    <RowOrderContainer style={style}>
      <RowOrderIds>
        <RowOrderLabel>
          <Preface size="xxsmall">{orderId}</Preface>
        </RowOrderLabel>
        <div>#{daily_id}</div>
      </RowOrderIds>
      <RowOrderTotals>
        <RowOrderLabel>
          <Preface size="xxsmall">{cartCount} Items</Preface>
        </RowOrderLabel>
        <div>{formatDollars(totals.total)}</div>
      </RowOrderTotals>
      <RowTicketCounts>
        {itemTypes &&
          itemTypes.map((i) => (
            <div key={i.item_type_id}>
              <RowOrderLabel>
                <Preface size="xxsmall">{i.name}</Preface>
              </RowOrderLabel>
              <div>{ticketCounts[i.item_type_id] || 0}</div>
            </div>
          ))}
      </RowTicketCounts>
      <RowPromised>
        <OrderPromised
          order={order}
          isOpen={true}
          amPm={true}
          warningMinutes={warningMinutes}
          alertMinutes={alertMinutes}
        />
      </RowPromised>
      <RowOrderButtons>
        <OrderButtons
          order={order}
          doneOnPrint={doneOnPrint}
          printReceipt={printReceipt}
          printTickets={printTickets}
          updateOrder={updateOrder}
          resetOrder={resetOrder}
        />
        <OrderActions
          order={order}
          doneOnPrint={doneOnPrint}
          hideDelay={hideDelay}
          updateOrder={updateOrder}
          resetOrder={resetOrder}
          delayOrder={delayOrder}
          fireOrder={fireOrder}
        />
      </RowOrderButtons>
    </RowOrderContainer>
  )
}

RowOrder.displayName = 'RowOrder'
RowOrder.propTypes = {
  order: propTypes.object,
  itemTypes: propTypes.array,
  doneOnPrint: propTypes.bool,
  hideDelay: propTypes.bool,
  warningMinutes: propTypes.number,
  alertMinutes: propTypes.number,
  updateOrder: propTypes.func,
  resetOrder: propTypes.func,
  delayOrder: propTypes.func,
  fireOrder: propTypes.func,
  printReceipt: propTypes.func,
  printTickets: propTypes.func,
  style: propTypes.object,
}

export default RowOrder
