import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'

const OfflineStatusContainer = styled('span')`
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) =>
    props.theme.colors[props.isOffline ? 'error' : 'success']};
`

const OfflineStatus = ({ isOffline }) => {
  return (
    <OfflineStatusContainer isOffline={isOffline}>
      {isOffline ? 'Offline' : 'Online'}
    </OfflineStatusContainer>
  )
}

OfflineStatus.displayName = 'OfflineStatus'
OfflineStatus.propTypes = {
  isOffline: propTypes.bool,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default OfflineStatus
