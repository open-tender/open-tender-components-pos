import React from 'react'
import propTypes from 'prop-types'
import { osName } from 'react-device-detect'
import styled from '@emotion/styled'

const ScrollableContainer = styled('div')`
  width: 100%;
  height: 100%;
  ${(props) => (props.hide ? 'overflow: hidden' : 'overflow-y: scroll')};
`

const ScrollableOuter = styled('div')`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 2rem; /* Increase/decrease this value for cross-browser compatibility */
  box-sizing: content-box; /* So the width will be 100% + 2rem */
`

const ScrollableInner = styled('div')`
  box-sizing: border-box;
  overflow: hidden;
  margin: 0 -1.5rem 0 0;
`

const hasScrollbars = ['Ubuntu', 'Linux']

const Scrollable = ({ children }) => {
  const hide = hasScrollbars.includes(osName)
  return (
    <ScrollableContainer hide={hide}>
      {hide ? (
        <ScrollableOuter>
          <ScrollableInner>{children}</ScrollableInner>
        </ScrollableOuter>
      ) : (
        children
      )}
    </ScrollableContainer>
  )
}

Scrollable.displayName = 'Scrollable'
Scrollable.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default Scrollable
