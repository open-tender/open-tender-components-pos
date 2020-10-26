import React from 'react'
import propTypes from 'prop-types'
import {
  isoToDate,
  minutesLeft,
  timezoneMap,
  currentLocalDate,
  isCompleted,
  fmtDate,
} from '@open-tender/js'
import styled from '@emotion/styled'

const fmtTime = (date, amPm) => {
  return fmtDate(date, amPm ? 'h:mma' : 'h:mm').toLowerCase()
}

const OrderTimeContainer = styled('div')`
  flex: 0 0 ${(props) => (props.isOpen ? 'auto' : '8.5rem')};
  margin: ${(props) => (props.isOpen ? '0 0 0 5rem' : '0')};
  text-align: right;
`

const OrderTimeLabel = styled('p')`
  font-size: ${(props) => props.theme.fonts.sizes.xxsmall};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.3rem;
`

const OrderTime = styled('div')`
  color: ${(props) => props.theme.colors[props.color || 'text']};
`

const OrderTimeTime = styled('p')`
  ${(props) => props.theme.fonts.headingsStyle}
  font-size: ${(props) => props.theme.fonts.sizes.h2};
  letter-spacing: 0;
`

const OrderPromised = ({
  order,
  isOpen,
  amPm = false,
  warningMinutes = 5,
  alertMinutes = 10,
}) => {
  const {
    timezone,
    ready_at,
    requested_at,
    expected_at,
    service_type,
    prep_status,
  } = order
  const tz = timezoneMap[timezone]
  const current = currentLocalDate(tz)
  const readyBy = isoToDate(ready_at, tz)
  const requested = isoToDate(requested_at, tz)
  const expected = isoToDate(expected_at, tz)
  const delayed = minutesLeft(expected, requested)
  const minutes = minutesLeft(readyBy, current)
  const readyTime = fmtTime(readyBy, amPm)
  const requestedTime = fmtTime(requested, amPm)
  const expectedTime = fmtTime(expected, amPm)
  const expectedDate = fmtDate(expected, 'EEE, MMM d')
  const todayDate = fmtDate(current, 'yyyy-MM-dd')
  let dateStr = fmtDate(expected, 'yyyy-MM-dd')
  dateStr = dateStr === todayDate ? '' : fmtDate(expected, 'EEE, MMM d')
  const color = isCompleted(prep_status)
    ? 'text'
    : minutes < warningMinutes
    ? 'warning'
    : minutes < alertMinutes
    ? 'alert'
    : 'text'

  return (
    <>
      {isOpen ? (
        <>
          <OrderTimeContainer isOpen={isOpen}>
            <OrderTimeLabel>Service Type</OrderTimeLabel>
            <OrderTime>
              <OrderTimeTime>{service_type}</OrderTimeTime>
            </OrderTime>
          </OrderTimeContainer>
          <OrderTimeContainer isOpen={isOpen}>
            <OrderTimeLabel>Date</OrderTimeLabel>
            <OrderTime>
              <OrderTimeTime>{expectedDate}</OrderTimeTime>
            </OrderTime>
          </OrderTimeContainer>
          <OrderTimeContainer isOpen={isOpen}>
            <OrderTimeLabel>Promised</OrderTimeLabel>
            <OrderTime>
              <OrderTimeTime>{requestedTime}</OrderTimeTime>
            </OrderTime>
          </OrderTimeContainer>
          <OrderTimeContainer isOpen={isOpen}>
            {delayed > 0 ? (
              <OrderTimeLabel>Delayed {delayed}</OrderTimeLabel>
            ) : (
              <OrderTimeLabel>Expected</OrderTimeLabel>
            )}
            <OrderTime color={delayed > 0 ? 'warning' : 'text'}>
              <OrderTimeTime>{expectedTime}</OrderTimeTime>
            </OrderTime>
          </OrderTimeContainer>
          <OrderTimeContainer isOpen={isOpen}>
            <OrderTimeLabel>Ready By</OrderTimeLabel>
            <OrderTime color={color}>
              <OrderTimeTime>{readyTime}</OrderTimeTime>
            </OrderTime>
          </OrderTimeContainer>
        </>
      ) : (
        <OrderTimeContainer isOpen={isOpen}>
          <OrderTimeLabel>{service_type}</OrderTimeLabel>
          <OrderTime color={color}>
            {delayed > 0 && <OrderTimeLabel>Delayed {delayed}</OrderTimeLabel>}
            {dateStr && <OrderTimeLabel>{dateStr}</OrderTimeLabel>}
            <OrderTimeTime>{readyTime}</OrderTimeTime>
          </OrderTime>
        </OrderTimeContainer>
      )}
    </>
  )
}

OrderPromised.displayName = 'OrderPromised'
OrderPromised.propTypes = {
  order: propTypes.object,
  isOpen: propTypes.bool,
  amPm: propTypes.bool,
  warningMinutes: propTypes.number,
  alertMinutes: propTypes.number,
}

export default OrderPromised
