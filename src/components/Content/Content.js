import propTypes from 'prop-types'
import styled from '@emotion/styled'

const Content = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  padding: ${(props) => props.theme.layout.headerHeight} 0 0;
  transition: all 250ms ease;
`

Content.displayName = 'Content'
Content.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default Content
