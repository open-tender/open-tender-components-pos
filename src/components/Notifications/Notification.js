import React, { useEffect } from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'

const NotificationContainer = styled('li')`
  display: block;
  float: right;
  clear: right;
  padding: 1rem 2rem;
  margin: 1rem 0 0;
  line-height: 1.2;
  text-align: center;
  transition: all 0.25s ease;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
  font-size: ${(props) => props.theme.fonts.sizes.small};
  border-radius: ${(props) => props.theme.borderRadius.small};
  background-color: ${(props) => props.theme.colors.link};
`

const Notification = ({ message, id, hide }) => {
  useEffect(() => {
    const timer = setTimeout(() => hide(id), 3000)
    return () => clearTimeout(timer)
  }, [hide, id])

  return <NotificationContainer>{message}</NotificationContainer>
}

Notification.displayName = 'Notification'
Notification.propTypes = {
  message: propTypes.string,
  id: propTypes.string,
  hide: propTypes.func,
}

export default Notification
