import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { Preface } from '../Preface'

const OrderTicketModifiersGroup = styled('div')`
  margin: 1rem 0;
`

const OrderTicketModifiersOptions = styled('div')`
  margin: 0.8rem 0 0;
  font-size: ${(props) => props.theme.fonts.sizes.xsmall};
`

const OrderTicketModifiersOption = styled('p')`
  margin: 0 0 0.7rem;
  font-size: ${(props) => props.theme.fonts.sizes.xsmall};
  color: ${(props) => props.theme.colors[props.color]};
`

const OrderTicketModifiers = ({ groups }) => {
  return groups.length > 0 ? (
    <div>
      {groups.map(
        (group) =>
          group.options.length > 0 && (
            <OrderTicketModifiersGroup key={group.id}>
              <Preface style={{ margin: '0 0 0.3rem' }} size="xxsmall">
                {group.short_name || 'Group Name'}
              </Preface>
              <OrderTicketModifiersOptions>
                {group.options.map((option, index) => {
                  const quantity =
                    option.quantity > 1 ? ` x ${option.quantity}` : null
                  return (
                    <OrderTicketModifiersOption
                      key={`${option.id}-${index}`}
                      color={quantity ? 'alert' : 'text'}
                    >
                      {option.short_name}
                      {quantity}
                    </OrderTicketModifiersOption>
                  )
                })}
              </OrderTicketModifiersOptions>
            </OrderTicketModifiersGroup>
          )
      )}
    </div>
  ) : null
}

OrderTicketModifiers.displayName = 'OrderTicketModifiers'
OrderTicketModifiers.propTypes = {
  groups: propTypes.array,
}

export default OrderTicketModifiers
