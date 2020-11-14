import React from 'react'
import propTypes from 'prop-types'
import { makeChannelName, formatDollars } from '@open-tender/js'
import styled from '@emotion/styled'
import { InfoList, OrderPromised } from '..'
import { OrderExpand } from '.'

const OrderHeaderContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-align: left;
  padding: ${(props) => props.theme.layout.paddingSmall};
`

const OrderHeaderDetails = styled('div')`
  flex-grow: 1;

  & > div ul li {
    font-size: ${(props) => props.theme.fonts.sizes.small};
  }
`

const OrderHeaderCustomer = styled('h2')`
  width: 100%;
  margin: 0 0 0.6rem -0.04em;
  line-height: 1.2;
  ${(props) => props.theme.ellipsis}
  ${(props) => props.compact && `font-size: ${props.theme.fonts.sizes.h3};`}
  ${(props) => props.compact && 'margin-bottom: 0.3rem;'}
`

const OrderHeaderNo = styled('span')`
  padding: 0 1rem 0 0;
  ${(props) => props.theme.fonts.headingsStyle}
  font-size: ${(props) =>
    props.compact
      ? props.theme.fonts.sizes.medium
      : props.theme.fonts.sizes.xlarge};
`

const OrderHeaderNumbers = styled('div')`
  margin: ${(props) => (props.compact ? '0.6rem 0 0' : '1.1rem 0 0')};

  & div {
    display: inline-block;
  }

  & div ul li {
    font-size: ${(props) => props.theme.fonts.sizes.xsmall};
    color: ${(props) => props.theme.colors.textSecondary};
  }
`

const OrderHeader = ({
  order,
  isOpen = false,
  openOrder,
  closeOrder,
  warningMinutes,
  alertMinutes,
  style = null,
  compact = false,
}) => {
  const { customer, channel, daily_id, order_id, totals } = order
  const channelName = makeChannelName(channel)
  const { first_name, last_name, phone } = customer || {}
  const customerName = first_name ? `${first_name} ${last_name}` : 'No Customer'
  const orderNos = [
    order_id ? `#${order_id}` : 'N/A',
    formatDollars(totals.total),
  ]
  return (
    <OrderHeaderContainer style={style}>
      <OrderExpand
        order={order}
        isOpen={isOpen}
        openOrder={openOrder}
        closeOrder={closeOrder}
      />
      <OrderHeaderDetails>
        <OrderHeaderCustomer compact={compact}>
          {customerName}
        </OrderHeaderCustomer>
        <InfoList items={phone ? [channelName, phone] : [channelName]} />
        <OrderHeaderNumbers compact={compact}>
          <OrderHeaderNo compact={compact}>#{daily_id}</OrderHeaderNo>
          <InfoList items={orderNos} />
        </OrderHeaderNumbers>
      </OrderHeaderDetails>
      <OrderPromised
        order={order}
        isOpen={isOpen}
        amPm={false}
        warningMinutes={warningMinutes}
        alertMinutes={alertMinutes}
      />
    </OrderHeaderContainer>
  )
}

OrderHeader.displayName = 'OrderHeader'
OrderHeader.propTypes = {
  order: propTypes.object,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  style: propTypes.object,
  isOpen: propTypes.bool,
  openOrder: propTypes.func,
  closeOrder: propTypes.func,
  warningMinutes: propTypes.number,
  alertMinutes: propTypes.number,
  compact: propTypes.bool,
}

export default OrderHeader
