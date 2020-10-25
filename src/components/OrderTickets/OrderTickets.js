import React from 'react'
import propTypes from 'prop-types'
import { makeItemTypesMap, makeTicketGroups } from '@open-tender/js'
import styled from '@emotion/styled'
import { AlertTriangle } from 'react-feather'
import { Preface } from '..'
import { OrderTicketButtons } from '.'

const OrderTicketsContainer = styled('div')`
  text-align: left;
  ${(props) => props.flex}
`

const OrderTicket = styled('div')`
  position: relative;
  padding: 0 0 1.5rem;
  // border-bottom: 0.1rem solid ${(props) => props.theme.colors.border};
  margin: ${(props) => props.theme.layout.paddingSmall} 0 0;
  ${(props) => props.flexChild}

  &:last-child {
    border-bottom: 0;
  }
`

const OrderTicketLine = styled('div')`
  position: absolute;
  bottom: 0;
  left: 0;
  right: ${(props) => props.theme.layout.paddingSmall};
  height: 0.1rem;
  background-color: ${(props) => props.theme.colors.border};
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

  &:last-child {
    margin: 0;
  }
`

const OrderTicketModifiersOptionName = styled('span')`
  color: ${(props) => props.theme.colors.textSecondary};
`

const OrderFulfillment = styled('div')`
  padding: ${(props) => props.theme.layout.paddingSmall} 0 0;
  color: ${(props) => props.theme.colors.alert};
`

const makeVehicle = (fulfillment) => {
  if (!fulfillment) return null
  const { vehicle_type, vehicle_color, vehicle_id } = fulfillment
  const vehicleId = vehicle_id ? ` (${vehicle_id})` : ''
  return `${vehicle_color || ''} ${vehicle_type || ''}${vehicleId}`
}

const OrderTickets = ({
  order,
  itemTypes,
  isOpen = false,
  isAssembly = false,
  isPast = false,
  doneOnPrint = false,
  expand = true,
  style = null,
  openOrder,
  closeOrder,
  printTicket,
  updateTicket,
  refreshCompletedOrders,
  showNotification,
}) => {
  const itemTypesMap = makeItemTypesMap(itemTypes)
  const { tickets, cart, fulfillment } = order
  const vehicle = makeVehicle(fulfillment)
  const groups = makeTicketGroups(tickets, cart, itemTypesMap, isAssembly)
  const displayedCount = groups.filter((i) => i.length).length
  const flex = isOpen ? `display: flex; flex-wrap: wrap;` : null
  const flexChild = isOpen ? `flex: 0 0 33.33333%; display: flex;` : null
  return (
    <>
      {vehicle && <OrderFulfillment>Curbside: {vehicle}</OrderFulfillment>}
      <OrderTicketsContainer style={style} flex={flex}>
        {groups.map((group, groupIndex) =>
          group.map((ticket, index) => {
            const { item_type_name, items } = ticket
            const showLine = isOpen || groupIndex + 1 !== displayedCount
            return (
              <OrderTicket key={ticket.ticket_no} flexChild={flexChild}>
                <OrderTicketButtons
                  order={order}
                  ticket={ticket}
                  isPast={isPast}
                  doneOnPrint={doneOnPrint}
                  openOrder={openOrder}
                  closeOrder={closeOrder}
                  printTicket={printTicket}
                  updateTicket={updateTicket}
                  refreshCompletedOrders={refreshCompletedOrders}
                  showNotification={showNotification}
                />
                {showLine && <OrderTicketLine />}
                {ticket.is_grouped ? (
                  <OrderTicketItem>
                    <OrderTicketItemHeader>
                      <OrderTicketItemInfo>
                        <Preface size="xxsmall">All {item_type_name}s</Preface>
                      </OrderTicketItemInfo>
                      <OrderTicketItemTitle>
                        <p>
                          {item_type_name}s x {items.length}
                        </p>
                      </OrderTicketItemTitle>
                    </OrderTicketItemHeader>
                    <OrderTicketModifiersOptions>
                      {items.map((item, idx) => (
                        <OrderTicketModifiersOption key={`${item.id}-${idx}`}>
                          {item.short_name}{' '}
                          {item.made_for && (
                            <OrderTicketModifiersOptionName>
                              ({item.made_for})
                            </OrderTicketModifiersOptionName>
                          )}
                        </OrderTicketModifiersOption>
                      ))}
                    </OrderTicketModifiersOptions>
                  </OrderTicketItem>
                ) : (
                  ticket.items.map((item, idx) => (
                    <OrderTicketItem key={`${item.id}-${idx}`}>
                      <OrderTicketItemHeader>
                        <OrderTicketItemInfo>
                          <Preface size="xxsmall">
                            {ticket.item_type_name} {index + 1} of{' '}
                            {group.length}
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
                      {expand && item.groups.length > 0 ? (
                        <div>
                          {item.groups.map(
                            (itemGroup) =>
                              itemGroup.options.length > 0 && (
                                <OrderTicketModifiersGroup key={itemGroup.id}>
                                  <Preface
                                    style={{ margin: '0 0 0.3rem' }}
                                    size="xxsmall"
                                  >
                                    {itemGroup.short_name || 'Group Name'}
                                  </Preface>
                                  <OrderTicketModifiersOptions>
                                    {itemGroup.options.map((option, index) => {
                                      const quantity =
                                        option.quantity > 1
                                          ? ` x ${option.quantity}`
                                          : null
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
                      ) : null}
                    </OrderTicketItem>
                  ))
                )}
              </OrderTicket>
            )
          })
        )}
      </OrderTicketsContainer>
    </>
  )
}

OrderTickets.displayName = 'OrderTickets'
OrderTickets.propTypes = {
  order: propTypes.object,
  itemTypes: propTypes.array,
  isOpen: propTypes.bool,
  isAssembly: propTypes.bool,
  isPast: propTypes.bool,
  doneOnPrint: propTypes.bool,
  expand: propTypes.bool,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  style: propTypes.object,
  openOrder: propTypes.func,
  closeOrder: propTypes.func,
  printTicket: propTypes.func,
  updateTicket: propTypes.func,
  refreshCompletedOrders: propTypes.func,
  showNotification: propTypes.func,
}

export default OrderTickets
