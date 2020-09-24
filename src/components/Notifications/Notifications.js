import React from 'react'
import propTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Notification from './Notification'
import styled from '@emotion/styled'

const NotificationsContainer = styled('div')`
  position: fixed;
  z-index: 15;
  bottom: ${(props) => props.theme.layout.padding};
  right: ${(props) => props.theme.layout.padding};
  display: flex;
  flex-direction: column;
`

const Notifications = ({ messages = [], hide }) => {
  return (
    <NotificationsContainer>
      <TransitionGroup component={'ul'}>
        {messages.map((message) => (
          <CSSTransition key={message.id} classNames="flash" timeout={500}>
            <Notification {...message} hide={hide} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </NotificationsContainer>
  )
}

Notifications.displayName = 'Notifications'
Notifications.propTypes = {
  messages: propTypes.array,
  hide: propTypes.func,
}

export default Notifications
