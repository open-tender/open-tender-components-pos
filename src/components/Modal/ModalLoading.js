import React from 'react'
import propTypes from 'prop-types'
import ClipLoader from 'react-spinners/ClipLoader'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ModalContainer from './ModalContainer'

const ModalLoading = ({ show, close }) => (
  <TransitionGroup component={null}>
    {show ? (
      <CSSTransition
        key="loader"
        classNames="md"
        timeout={{ enter: 250, exit: 250 }}
      >
        <ModalContainer id="modal-container" onClick={close}>
          <ClipLoader size={44} color={'#ffffff'} />
        </ModalContainer>
      </CSSTransition>
    ) : null}
  </TransitionGroup>
)

ModalLoading.displayName = 'ModalLoading'
ModalLoading.propTypes = {
  show: propTypes.bool,
  close: propTypes.func,
}

export default ModalLoading
