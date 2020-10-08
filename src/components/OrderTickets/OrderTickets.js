import React from 'react'
import propTypes from 'prop-types'
import { makeItemTypesMap, makeTicketGroups } from '@open-tender/js'
import styled from '@emotion/styled'
import { Preface } from '../Preface'
import { AlertTriangle } from 'react-feather'
import OrderTicketModifiers from './OrderTicketModifiers'

const OrderTicketsContainer = styled('div')`
  text-align: left;
`

const OrderTicket = styled('div')`
  position: relative;
  padding: 0 0 1.5rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.border};
  margin: 0 ${(props) => props.theme.layout.paddingSmall}
    ${(props) => props.theme.layout.paddingSmall} 0;

  // &:first-child {
  //   margin-top: ${(props) => props.theme.layout.paddingSmall};
  // }

  &:last-child {
    border-bottom: 0;
    margin-bottom: 0;
  }
`

const OrderTicketButtons = styled('div')`
  position: absolute;
  z-index: 1;
  top: 0.4rem;
  right: -1.4rem;
`

const OrderTicketItem = styled('div')``

const OrderTicketItemHeader = styled('div')`
  width: 100%;
  padding: 0 10rem 0 0;
  margin: -0.2rem 0 0;
`

const OrderTicketItemInfo = styled('div')`
  width: 100%;
  margin: 0 0 0.6rem;
`

const OrderTicketItemTitle = styled('div')`
  width: 100%;
  overflow: hidden;

  p {
    width: 100%;
    font-size: ${(props) => props.theme.fonts.sizes.medium};
    ${(props) => props.theme.ellipsis}
  }
`

const OrderTicketItemNotes = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0.7rem 0 0;
  font-size: ${(props) => props.theme.fonts.sizes.xsmall};
  color: ${(props) => props.theme.colors.alert};
  line-height: 1.3;
`

const OrderTicketItemNotesIcon = styled('div')`
  position: relative;
  top: 0.1rem;
  flex-shrink: 0;
  display: block;
  width: 1.6rem;
  height: 1.6rem;
  margin: 0 0.8rem 0 0;
`

const OrderTicketGrouped = styled('div')``

const OrderTickets = ({
  order,
  itemTypes,
  isAssembly = false,
  expand = true,
  style = null,
}) => {
  const itemTypesMap = makeItemTypesMap(itemTypes)
  const { tickets, cart } = order
  const groups = makeTicketGroups(tickets, cart, itemTypesMap, isAssembly)
  return (
    <OrderTicketsContainer style={style}>
      {groups.map((group) =>
        group.map((ticket, index) => {
          const props = { order, group, ticket, index, expand }
          return ticket.is_grouped ? (
            <OrderTicketGrouped key={ticket.ticket_no} {...props} />
          ) : (
            <OrderTicket key={ticket.ticket_no}>
              <OrderTicketButtons />
              {ticket.items.map((item, idx) => (
                <OrderTicketItem key={`${item.id}-${idx}`}>
                  <OrderTicketItemHeader>
                    <OrderTicketItemInfo>
                      <Preface size="xxsmall">
                        {ticket.item_type_name} {index + 1} of {group.length}
                        {item.made_for && ` (${item.made_for})`}
                      </Preface>
                    </OrderTicketItemInfo>
                    <OrderTicketItemTitle>
                      <p>{item.short_name}</p>
                    </OrderTicketItemTitle>
                  </OrderTicketItemHeader>
                  {item.notes.length > 0 && (
                    <OrderTicketItemNotes>
                      <OrderTicketItemNotesIcon>
                        <AlertTriangle size={null} />
                      </OrderTicketItemNotesIcon>
                      <span>{item.notes}</span>
                    </OrderTicketItemNotes>
                  )}
                  {expand && <OrderTicketModifiers groups={item.groups} />}
                </OrderTicketItem>
              ))}
            </OrderTicket>
          )
        })
      )}
    </OrderTicketsContainer>
  )
}

OrderTickets.displayName = 'OrderTickets'
OrderTickets.propTypes = {
  order: propTypes.object,
  itemTypes: propTypes.array,
  isAssembly: propTypes.bool,
  expand: propTypes.bool,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  style: propTypes.object,
}

export default OrderTickets
