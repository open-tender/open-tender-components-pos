import React from 'react'
import propTypes from 'prop-types'
import { RowHeader, InfoList } from '..'
import { makeChannelName, orderTypeNamesMap } from '@open-tender/js'
import { OrderExpand } from '../OrderHeader'

const RowOrderHeader = ({ order, openOrder, closeOrder }) => {
  const { order_type, customer, channel } = order
  const orderType = order_type === 'MAIN_MENU' ? 'OLO' : order_type
  const { first_name, last_name, phone } = customer || {}
  const customerName = first_name ? `${first_name} ${last_name}` : 'No Customer'
  const channelName = makeChannelName(channel)
  const infoItems =
    channelName === 'POS'
      ? [channelName, orderTypeNamesMap[orderType]]
      : phone
      ? [channelName, phone]
      : [channelName]
  return (
    <>
      <OrderExpand
        order={order}
        isOpen={false}
        openOrder={openOrder}
        closeOrder={closeOrder}
      />
      <RowHeader title={customerName}>
        <InfoList items={infoItems} />
      </RowHeader>
    </>
  )
}

RowOrderHeader.displayName = 'RowOrderHeader'
RowOrderHeader.propTypes = {
  order: propTypes.array,
  openOrder: propTypes.func,
  closeOrder: propTypes.func,
}

export default RowOrderHeader
