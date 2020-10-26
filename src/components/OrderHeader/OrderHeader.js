import React from 'react'
import propTypes from 'prop-types'
import { makeChannelName, formatDollars } from '@open-tender/js'
import styled from '@emotion/styled'
import { InfoList } from '..'
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
`

const OrderHeaderNo = styled('span')`
  padding: 0 1rem 0 0;
  ${(props) => props.theme.fonts.headingsStyle}
  font-size: ${(props) => props.theme.fonts.sizes.xlarge};
`

const OrderHeaderNumbers = styled('div')`
  margin: 1.1rem 0 0;

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
  children,
  style = null,
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
        <OrderHeaderCustomer>{customerName}</OrderHeaderCustomer>
        <InfoList items={phone ? [channelName, phone] : [channelName]} />
        <OrderHeaderNumbers>
          <OrderHeaderNo>#{daily_id}</OrderHeaderNo>
          <InfoList items={orderNos} />
        </OrderHeaderNumbers>
      </OrderHeaderDetails>
      <div>{children}</div>
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
}

export default OrderHeader
