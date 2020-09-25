import propTypes from 'prop-types'
import styled from '@emotion/styled'

const Page = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 ${(props) => props.theme.layout.padding};
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  ${(props) =>
    props.isError ? `background-color: ${props.theme.colors.errorDark}` : null}
`

Page.displayName = 'Page'
Page.propTypes = {
  isError: propTypes.bool,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default Page
