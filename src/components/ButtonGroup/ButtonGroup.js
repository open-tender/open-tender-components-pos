import propTypes from 'prop-types'
import styled from '@emotion/styled'

const ButtonGroup = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & button {
    display: block;
    min-width: ${(props) => props.minWidth || '10rem'};

    &:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      margin-left: 0.1rem;
    }

    &:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`

ButtonGroup.displayName = 'ButtonGroup'
ButtonGroup.propTypes = {
  minWidth: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  theme: propTypes.object,
}

export default ButtonGroup
