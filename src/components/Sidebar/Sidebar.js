import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'

const SidebarContainer = styled('div')`
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${(props) => props.theme.layout.sidebarNarrowWidth};
  padding: 0 0 0 ${(props) => props.theme.layout.paddingSmall};
`

const SidebarContentContainer = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Sidebar = ({ children }) => {
  return (
    <SidebarContainer>
      <SidebarContentContainer>{children}</SidebarContentContainer>
    </SidebarContainer>
  )
}

Sidebar.displayName = 'Sidebar'
Sidebar.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default Sidebar
