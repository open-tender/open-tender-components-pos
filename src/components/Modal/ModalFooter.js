import propTypes from 'prop-types'
import styled from '@emotion/styled'

const ModalFooter = styled('div')`
  margin: ${(props) => props.theme.layout.padding} 0 0;
`

ModalFooter.displayName = 'ModalFooter'
ModalFooter.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default ModalFooter
