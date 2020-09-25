import propTypes from 'prop-types'
import styled from '@emotion/styled'

const Card = styled('div')`
  flex: 0 0 ${(props) => props.theme.layout.cardWidth};
  height: 100%;
  padding: 0 0 ${(props) => props.theme.layout.padding};
  overflow-y: scroll;
`

Card.displayName = 'Card'
Card.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default Card
