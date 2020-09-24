import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Alert from './Alert'

const AlertsContainer = styled('div')`
  position: fixed;
  z-index: 15;
  bottom: ${(props) => props.theme.layout.padding};
  left: ${(props) => props.theme.layout.padding};
  display: flex;
  flex-direction: column;
`

const Alerts = ({ alerts = [], dismiss, dismissAll }) => {
  return (
    <AlertsContainer>
      <TransitionGroup component={'ul'}>
        {alerts.map((alert) => (
          <CSSTransition key={alert.id} classNames="flash" timeout={500}>
            <Alert {...alert} dismiss={() => dismiss(alert.id)} />
          </CSSTransition>
        ))}
      </TransitionGroup>
      {alerts.length > 1 && <Alert message="Clear all" dismiss={dismissAll} />}
    </AlertsContainer>
  )
}

Alerts.displayName = 'Alerts'
Alerts.propTypes = {
  alerts: propTypes.array,
  dismiss: propTypes.func,
  dismissAll: propTypes.func,
}

export default Alerts
