import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Arrival from './Arrival'

const ArrivalsContainer = styled('div')`
  position: absolute;
  z-index: 14;
  bottom: 2rem;
  left: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
`

const Arrivals = ({ arrivals = [], dismiss, print }) => {
  return (
    <ArrivalsContainer>
      <TransitionGroup component={null}>
        {arrivals.map((arrival) => (
          <CSSTransition
            key={arrival.order_id}
            classNames="flash"
            timeout={500}
          >
            <Arrival
              arrival={arrival}
              dismiss={() => dismiss(arrival.order_uuid)}
              print={print ? () => print(arrival.order_uuid) : null}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ArrivalsContainer>
  )
}

Arrivals.displayName = 'Arrivals'
Arrivals.propTypes = {
  arrivals: propTypes.array,
  dismiss: propTypes.func,
  print: propTypes.func,
}

export default Arrivals
