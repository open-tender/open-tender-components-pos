import propTypes from 'prop-types'
import styled from '@emotion/styled'

const CartItem = styled('div')`
  width: 100%;
  padding: 0 0 ${(props) => props.theme.layout.paddingSmall};

  &:first-child {
    padding-top: ${(props) => props.theme.layout.paddingSmall};
  }

  & button {
    width: 100%;
    padding: 0;
  }

  & button > span {
    display: block;
    width: 100%;
  }
`

CartItem.displayName = 'CartItem'
CartItem.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default CartItem
