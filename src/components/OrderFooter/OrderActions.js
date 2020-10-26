import React from 'react'
import propTypes from 'prop-types'
import {
  prepStatus,
  isoToDate,
  timezoneMap,
  currentLocalDate,
  notDone,
  isCompleted,
} from '@open-tender/js'
import { ButtonGroup, ButtonHeader } from '..'

const OrderActions = ({
  order,
  doneOnPrint = false,
  hideDelay = false,
  showReset = false,
  delayOrder,
  fireOrder,
  updateOrder,
  resetOrder,
}) => {
  const { order_uuid, prep_status, fire_at, timezone, tickets } = order
  const isNotDone = notDone(prep_status)
  const isComplete = isCompleted(prep_status)
  const tz = timezoneMap[timezone]
  const fireDate = isoToDate(fire_at, tz)
  const currentDate = currentLocalDate(tz)
  const isFuture = isNotDone && fireDate > currentDate
  const incompleteTickets =
    tickets.filter((i) => i.ticket_status !== prepStatus.COMPLETED).length > 0

  return (
    <ButtonGroup>
      {isFuture ? (
        <ButtonHeader
          text="Fire"
          color="active"
          onClick={() => fireOrder(order)}
        />
      ) : isNotDone && !hideDelay ? (
        <ButtonHeader
          text="Delay"
          color="active"
          onClick={() => delayOrder(order)}
        />
      ) : prep_status === prepStatus.DONE ? (
        <>
          <ButtonHeader
            text="Complete"
            color="active"
            onClick={() => updateOrder(order_uuid, prepStatus.COMPLETED)}
            disabled={doneOnPrint && incompleteTickets}
          />
          {showReset && (
            <ButtonHeader
              text="Refire"
              color="active"
              onClick={() => resetOrder(order_uuid)}
            />
          )}
        </>
      ) : isComplete ? (
        <ButtonHeader
          text="Refire"
          color="active"
          onClick={() => resetOrder(order_uuid)}
        />
      ) : null}
    </ButtonGroup>
  )
}

OrderActions.displayName = 'OrderActions'
OrderActions.propTypes = {
  order: propTypes.object,
  doneOnPrint: propTypes.bool,
  hideDelay: propTypes.bool,
  showReset: propTypes.bool,
  delayOrder: propTypes.func,
  fireOrder: propTypes.func,
  updateOrder: propTypes.func,
  resetOrder: propTypes.func,
}

export default OrderActions
