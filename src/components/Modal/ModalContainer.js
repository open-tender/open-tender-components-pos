import propTypes from 'prop-types'
import styled from '@emotion/styled'

const ModalContainer = styled('div')`
  position: fixed;
  z-index: 101;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: ${(props) => (props.scrollable ? `flex-start` : `center`)};
  justify-content: center;
  overflow-y: scroll;
  -webkit-overflow-scrolling: auto;
`

ModalContainer.displayName = 'ModalContainer'
ModalContainer.propTypes = {
  scrollable: propTypes.bool,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default ModalContainer
