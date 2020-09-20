import propTypes from 'prop-types'
import styled from '@emotion/styled'

const Header = styled('header')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${(props) => props.theme.layout.headerHeight};
  padding: 0 ${(props) => props.theme.layout.padding};
  font-size: ${(props) => props.theme.fonts.sizes.small};
`

Header.displayName = 'Header'
Header.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default Header
