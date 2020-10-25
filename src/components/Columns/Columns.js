import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Order } from '..'

const ColumnsContainer = styled('div')`
  width: 100%;
  height: 100%;
  padding: 0 0 ${(props) => props.theme.layout.paddingSmall}
    ${(props) => props.theme.layout.paddingSmall};
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

const Columns = ({ orders = [] }) => {
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
              <Order order={order} />
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
}

export default Columns
