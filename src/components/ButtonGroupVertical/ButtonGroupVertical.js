import propTypes from 'prop-types'
import styled from '@emotion/styled'

const ButtonGroupVertical = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  & button {
    display: block;
    width: 100%;

    &:first-of-type {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:last-child {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin-top: 0.1rem;
    }

    &:not(:first-of-type):not(:last-child) {
      border-radius: 0;
      margin-top: 0.1rem;
    }
  }
`

ButtonGroupVertical.displayName = 'ButtonGroupVertical'
ButtonGroupVertical.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  theme: propTypes.object,
}

export default ButtonGroupVertical
