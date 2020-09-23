import propTypes from 'prop-types'
import styled from '@emotion/styled'

const FlexCentered = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  & > div {
    margin: 0 0 ${(props) => props.theme.layout.headerHeight};
  }
`

FlexCentered.displayName = 'FlexCentered'
FlexCentered.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  theme: propTypes.object,
}

export default FlexCentered
