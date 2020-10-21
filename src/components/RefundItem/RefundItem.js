import propTypes from 'prop-types'
import styled from '@emotion/styled'

const RefundItem = styled('div')`
  width: 100%;
  padding: 0 0 ${(props) => props.theme.layout.paddingSmall};

  &:first-of-type {
    padding-top: ${(props) => props.theme.layout.paddingSmall};
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
