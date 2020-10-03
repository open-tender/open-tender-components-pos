import propTypes from 'prop-types'
import styled from '@emotion/styled'

const Page = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  padding-right: ${(props) => props.theme.layout.padding};
  padding-left: ${(props) =>
    props.hasSidebar
      ? props.theme.layout.sidebarWidth
      : props.theme.layout.padding};
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  ${(props) =>
    props.isError ? `background-color: ${props.theme.colors.errorDark}` : null}
`

Page.displayName = 'Page'
Page.propTypes = {
  isError: propTypes.bool,
  hasSidebar: propTypes.bool,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default Page
