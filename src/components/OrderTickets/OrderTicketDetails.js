import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { AlertTriangle, Slash } from 'react-feather'

const OrderTicketDetailsView = styled('div')`
  padding: 0 ${(props) => props.theme.layout.paddingSmall};
  margin: 1.5rem 0 2.5rem;

  p {
    font-size: ${(props) => props.theme.fonts.sizes.xsmall};
    margin: 1rem 0;
  }
`

// const OrderTicketDetailsBool = styled('span')`
//   color: ${(props) => props.theme.colors[props.checked ? 'success' : 'error']};
// `

const OrderTicketDetailsNotes = styled('p')`
  color: ${(props) => props.theme.colors.alert};
  line-height: 1.4;
`

const OrderTicketDetailsNotesIcon = styled('span')`
  position: relative;
  top: 0.3rem;
  flex-shrink: 0;
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  margin: 0 0.8rem 0 0;
`

const OrderTicketDetails = ({ details, isAssembly }) => {
  if (!details || isAssembly) return null
  const { eating_utensils, notes } = details
  return (
    <OrderTicketDetailsView>
      {/* <p>
        <OrderTicketDetailsBool checked={eating_utensils}>
          {eating_utensils ? 'Include Eating Utensils' : 'No Eating Utensils'}
        </OrderTicketDetailsBool>
      </p> */}
      {!eating_utensils && (
        <OrderTicketDetailsNotes>
          <OrderTicketDetailsNotesIcon>
            <Slash size={null} />
          </OrderTicketDetailsNotesIcon>
          <span>No Eating Utensils</span>
        </OrderTicketDetailsNotes>
      )}
      {notes && notes.length > 0 && (
        <OrderTicketDetailsNotes>
          <OrderTicketDetailsNotesIcon>
            <AlertTriangle size={null} />
          </OrderTicketDetailsNotesIcon>
          <span>{notes}</span>
        </OrderTicketDetailsNotes>
      )}
    </OrderTicketDetailsView>
  )
}

OrderTicketDetails.displayName = 'OrderTicketDetails'
OrderTicketDetails.propTypes = {
  details: propTypes.object,
  isAssembly: propTypes.bool,
}

export default OrderTicketDetails
