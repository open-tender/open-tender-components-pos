import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Order } from '..'

const ColumnsContainer = styled('div')`
  width: 100%;
  height: 100%;
  padding: 0 0 ${(props) => props.theme.layout.paddingSmall};
  overflow-x: scroll;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Column = styled('div')`
  flex: 0 0 40rem;
  max-width: 40rem;
  height: 100%;
  margin: 0 1.5rem 0 0;
`

const Columns = ({
  orders = [],
  itemTypes = [],
  isAssembly = false,
  isPast = false,
  doneOnPrint = false,
  hideDelay = false,
  warningMinutes = 5,
  alertMinutes = 10,
  actions = {},
}) => {
  return (
    <ColumnsContainer>
      <TransitionGroup component={null}>
        {orders.map((order) => (
          <CSSTransition
            key={order.order_uuid}
            classNames="fade-up"
            timeout={250}
          >
            <Column>
              <Order
                order={order}
                itemTypes={itemTypes}
                isAssembly={isAssembly}
                isPast={isPast}
                doneOnPrint={doneOnPrint}
                hideDelay={hideDelay}
                warningMinutes={warningMinutes}
                alertMinutes={alertMinutes}
                noScrollable={true}
                {...actions}
              />
            </Column>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ColumnsContainer>
  )
}

Columns.displayName = 'Columns'
Columns.propTypes = {
  orders: propTypes.array,
  itemTypes: propTypes.array,
  isAssembly: propTypes.bool,
  isPast: propTypes.bool,
  doneOnPrint: propTypes.bool,
  hideDelay: propTypes.bool,
  warningMinutes: propTypes.number,
  alertMinutes: propTypes.number,
  actions: propTypes.object,
}

export default Columns
