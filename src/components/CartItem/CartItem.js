import propTypes from 'prop-types'
import styled from '@emotion/styled'

const CartItem = styled('div')`
  width: 100%;
  padding: 0 0 1.5rem;

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
