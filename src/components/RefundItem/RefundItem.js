import propTypes from 'prop-types'
import styled from '@emotion/styled'

const RefundItem = styled('div')`
  width: 100%;
  padding: 0 0 1.5rem;

  &:first-of-type {
    padding-top: 1.5rem;
  }
`

RefundItem.displayName = 'RefundItem'
RefundItem.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default RefundItem
