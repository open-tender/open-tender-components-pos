import React, { useEffect, useCallback } from 'react'
import propTypes from 'prop-types'
import { X } from 'react-feather'
import styled from '@emotion/styled'

const CloseButton = styled('button')`
  position: absolute;
  z-index: 1;
  top: 7px;
  right: 8px;
  color: ${(props) => props.theme.colors.text};
`

const ModalClose = ({ close, size = 28, style = null }) => {
  const handleEscape = useCallback(
    (evt) => {
      if (evt.keyCode === 27) close()
    },
    [close]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleEscape, false)
    return () => document.removeEventListener('keydown', handleEscape, false)
  }, [handleEscape])

  return (
    <CloseButton onPointerUp={close} style={style} aria-label="Close dialog">
      <X size={size} />
    </CloseButton>
  )
}

ModalClose.displayName = 'ModalClose'
ModalClose.propTypes = {
  close: propTypes.func,
  size: propTypes.number,
  style: propTypes.object,
}

export default ModalClose
