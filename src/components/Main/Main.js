import propTypes from 'prop-types'
import styled from '@emotion/styled'

const Main = styled('div')`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 0 0 0
    ${(props) =>
      props.hasSidebar ? props.theme.layout.sidebarNarrowWidth : '0'};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transition: all 250ms ease;
`

Main.displayName = 'Main'
Main.propTypes = {
  hasSidebar: propTypes.bool,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default Main
