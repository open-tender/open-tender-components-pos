import React from 'react'
import propTypes from 'prop-types'
import ModalOverlay from './ModalOverlay'
import ModalLoading from './ModalLoading'
import ModalContent from './ModalContent'

const Modal = ({
  show,
  loading,
  close,
  scrollable = false,
  style = null,
  children,
}) => {
  return (
    <>
      <ModalOverlay show={show || loading} />
      <ModalLoading show={loading} />
      <ModalContent
        show={show}
        close={close}
        scrollable={scrollable}
        style={style}
      >
        {children}
      </ModalContent>
    </>
  )
}

Modal.displayName = 'Modal'
Modal.propTypes = {
  show: propTypes.bool,
  loading: propTypes.bool,
  scrollable: propTypes.bool,
  close: propTypes.func,
  style: propTypes.object,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default Modal
