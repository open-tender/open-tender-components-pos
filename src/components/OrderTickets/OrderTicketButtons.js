import React from 'react'
import propTypes from 'prop-types'
import { Printer, CheckCircle } from 'react-feather'
import { Button } from '..'
import {
  prepStatus,
  isoToDate,
  timezoneMap,
  currentLocalDate,
  isDone,
} from '@open-tender/js'
import styled from '@emotion/styled'

const OrderTicketButtonsContainer = styled('div')`
  position: absolute;
  z-index: 1;
  top: 0.4rem;
  right: 0.5rem;

  button {
    flex-shrink: 0;
    width: 5rem;
    height: 5rem;
    padding: 0;
    margin: 0;
  }
`

const OrderTicketButtons = ({
  order,
  ticket,
  doneOnPrint = false,
  closeOrder,
  printTicket,
  updateTicket,
  showNotification,
}) => {
  const { order_uuid, prep_status, timezone, fire_at } = order
  const { ticket_status, ticket_no } = ticket
  const orderIsDone = isDone(prep_status)
  const isCompleted = ticket_status === prepStatus.COMPLETED
  const tz = timezoneMap[timezone]
  const fireDate = isoToDate(fire_at, tz)
  const currentDate = currentLocalDate(tz)
  const isFuture = fireDate > currentDate
  const size = 20

  const print = () => {
    printTicket(order_uuid, ticket_no)
  }

  const update = () => {
    const status = !isDone(ticket_status) ? 'done' : 'reset'
    updateTicket(order_uuid, ticket_no, status)
    if (status === 'reset') {
      closeOrder()
      showNotification('Sent back to Assembly!')
    }
  }

  const complete = () => {
    const status =
      prep_status === prepStatus.COMPLETED &&
      ticket_status === prepStatus.COMPLETED
        ? 'reset'
        : 'completed'
    updateTicket(order_uuid, ticket_no, status)
    if (status === 'reset') {
      closeOrder()
      showNotification('Sent back to Assembly!')
    }
  }

  return (
    <OrderTicketButtonsContainer>
      {!isFuture && (
        <Button
          color={ticket_status === prepStatus.TODO ? 'icon' : 'iconDead'}
          onClick={print}
        >
          <Printer size={size} />
        </Button>
      )}
      {!doneOnPrint ? (
        <Button
          color={isDone(ticket_status) ? 'iconSuccess' : 'icon'}
          onClick={update}
        >
          <CheckCircle size={size} />
        </Button>
      ) : (
        orderIsDone && (
          <Button
            color={isCompleted ? 'iconSuccess' : 'icon'}
            onClick={complete}
          >
            <CheckCircle size={size} />
          </Button>
        )
      )}
    </OrderTicketButtonsContainer>
  )
}

OrderTicketButtons.displayName = 'OrderTicketButtons'
OrderTicketButtons.propTypes = {
  order: propTypes.object,
  ticket: propTypes.object,
  doneOnPrint: propTypes.bool,
  isPast: propTypes.bool,
  closeOrder: propTypes.func,
  printTicket: propTypes.func,
  updateTicket: propTypes.func,
  refreshCompletedOrders: propTypes.func,
  showNotification: propTypes.func,
}
export default OrderTicketButtons
