import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import { Button } from '..'
import { CheckCircle } from 'react-feather'
import styled from '@emotion/styled'

const ArrivalContainer = styled('div')`
  position: relative;
  display: block;
  float: left;
  clear: left;
  padding: 1.25rem 1.5rem 1.25rem;
  margin: 0 0 1rem;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  color: ${(props) => props.theme.colors.bg4};
  background-color: ${(props) => props.theme.colors.alert};
  transition: all 250ms ease;
`

const ArrivalLabel = styled('p')`
  font-size: 1rem;
  margin: 0;
`

const ArrivalOrder = styled('p')`
  font-weight: 900;
  margin: 0 0 0.5rem;
`

const ArrivalVehicle = styled('p')`
  font-size: ${(props) => props.theme.fonts.sizes.xsmall};
  margin: 0 0 0.5rem;
`

const ArrivalInfo = styled('p')`
  font-weight: 900;
  margin: 0;
`

const ArrivalDismiss = styled('div')`
  position: absolute;
  bottom: 0;
  right: 0;

  button {
    padding: 1rem;
  }
`

const Arrival = ({ arrival, dismiss, print }) => {
  const {
    order_id,
    customer,
    vehicle_type,
    vehicle_color,
    vehicle_id,
    arrival_info,
  } = arrival
  const [printed, setPrinted] = useState(false)
  const vehicle = `${vehicle_color || ''} ${vehicle_type || ''}`
  const { first_name, last_name } = customer || {}
  const customerName = first_name ? `${first_name} ${last_name}` : null
  const [alert] = useState(new Audio('/horn.mp3'))

  useEffect(() => {
    if (print && !printed) {
      print()
      if (alert) alert.play()
      setPrinted(true)
    }
  }, [print, printed, alert])

  return (
    <ArrivalContainer>
      <ArrivalLabel>Order</ArrivalLabel>
      <ArrivalOrder>{order_id}</ArrivalOrder>
      {customerName && <ArrivalVehicle>{customerName}</ArrivalVehicle>}
      <ArrivalVehicle>{vehicle}</ArrivalVehicle>
      {vehicle_id && <ArrivalVehicle>{vehicle_id}</ArrivalVehicle>}
      <ArrivalInfo>{arrival_info}</ArrivalInfo>
      <ArrivalDismiss>
        <Button label="Dismiss" onClick={dismiss} color="darkText">
          <CheckCircle size={20} />
        </Button>
      </ArrivalDismiss>
    </ArrivalContainer>
  )
}

Arrival.displayName = 'Arrival'
Arrival.propTypes = {
  arrival: propTypes.object,
  dismiss: propTypes.func,
  print: propTypes.func,
}

export default Arrival
