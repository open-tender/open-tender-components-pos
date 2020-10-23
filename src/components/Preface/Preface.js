import propTypes from 'prop-types'
import styled from '@emotion/styled'

const Preface = styled('p')`
  font-size: ${(props) => props.theme.fonts.sizes[props.size || 'medium']};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.colors[props.color || 'textSecondary']};
`

Preface.displayName = 'Preface'
Preface.propTypes = {
  props: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default Preface
