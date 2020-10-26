import React from 'react'
import propTypes from 'prop-types'
import { Printer, CheckCircle, FileText } from 'react-feather'
import {
  prepStatus,
  isoToDate,
  timezoneMap,
  currentLocalDate,
  notDone,
} from '@open-tender/js'
import { Button } from '..'
import styled from '@emotion/styled'

const OrderButtonsContainer = styled('div')`
  margin: 0 0.5rem 0 0;

  button {
    flex-shrink: 0;
    width: 5rem;
    height: 5rem;
    padding: 0;
    margin: 0;
  }
`

const OrderButtons = ({
  order,
  doneOnPrint,
  printReceipt,
  printTickets,
  updateOrder,
  resetOrder,
}) => {
  const { order_uuid, prep_status, tickets, timezone, fire_at } = order
  const incompleteTickets =
    tickets.filter((i) => i.ticket_status !== prepStatus.COMPLETED).length > 0
  const isNotDone = notDone(prep_status)
  const completedColor =
    prep_status === prepStatus.COMPLETED
      ? 'iconSuccess'
      : incompleteTickets
      ? 'iconDisabled'
      : 'icon'
  const tz = timezoneMap[timezone]
  const fireDate = isoToDate(fire_at, tz)
  const currentDate = currentLocalDate(tz)
  const isFuture = fireDate > currentDate
  const size = 20

  const update = () => {
    isNotDone
      ? updateOrder(order_uuid, prepStatus.DONE)
      : resetOrder(order_uuid)
  }

  const complete = () => {
    prep_status === prepStatus.DONE
      ? updateOrder(order_uuid, prepStatus.COMPLETED)
      : resetOrder(order_uuid)
  }

  return (
    <OrderButtonsContainer>
      {prep_status === prepStatus.COMPLETED && (
        <Button
          color={prep_status === prepStatus.TODO ? 'icon' : 'iconDead'}
          onClick={() => printReceipt(order_uuid)}
        >
          <FileText size={size} />
        </Button>
      )}
      {!isFuture && (
        <Button
          color={prep_status === prepStatus.TODO ? 'icon' : 'iconDead'}
          onClick={() => printTickets(order_uuid)}
        >
          <Printer size={size} />
        </Button>
      )}
      {!doneOnPrint ? (
        <Button color={isNotDone ? 'icon' : 'iconSuccess'} onClick={update}>
          <CheckCircle size={size} />
        </Button>
      ) : (
        !isNotDone && (
          <Button
            color={completedColor}
            onClick={complete}
            disabled={incompleteTickets}
          >
            <CheckCircle size={size} />
          </Button>
        )
      )}
    </OrderButtonsContainer>
  )
}

OrderButtons.displayName = 'OrderButtons'
OrderButtons.propTypes = {
  order: propTypes.object,
  doneOnPrint: propTypes.bool,
  printReceipt: propTypes.func,
  printTickets: propTypes.func,
  updateOrder: propTypes.func,
  resetOrder: propTypes.func,
}

export default OrderButtons
