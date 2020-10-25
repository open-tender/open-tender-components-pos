import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Order } from '..'

const GridContainer = styled('div')`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: auto;
  display: flex;
  flex-wrap: wrap;
`

const Box = styled('div')`
  width: 25%;
  height: 50%;
  padding: 0 ${(props) => props.theme.layout.paddingSmall}
    ${(props) => props.theme.layout.paddingSmall} 0;
`

const Grid = ({ orders = [] }) => {
  return (
    <GridContainer>
      <TransitionGroup component={null}>
        {orders.map((order) => (
          <CSSTransition
            key={order.order_uuid}
            classNames="fade-up"
            timeout={250}
          >
            <Box>
              <Order order={order} />
            </Box>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </GridContainer>
  )
}

Grid.displayName = 'Grid'
Grid.propTypes = {
  orders: propTypes.array,
}

export default Grid
