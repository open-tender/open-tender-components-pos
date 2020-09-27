import propTypes from 'prop-types'
import styled from '@emotion/styled'

const ButtonGroupBig = styled('div')`
  display: flex;
  flex-wrap: wrap;

  & > div {
    flex: 0 0 ${(props) => props.width || '25%'};
    height: ${(props) => props.theme.layout.bigButtonHeight};
    padding: 0 0.1rem 0.1rem 0;
  }

  & button {
    width: 100%;
    height: 100%;
    padding: ${(props) => props.theme.layout.gutter};
  }
`

ButtonGroupBig.displayName = 'ButtonGroupBig'
ButtonGroupBig.propTypes = {
  width: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default ButtonGroupBig
