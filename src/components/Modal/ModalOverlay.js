import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Overlay = styled('div')`
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.overlay};
`

const ModalOverlay = ({ show }) => (
  <TransitionGroup component={null}>
    {show ? (
      <CSSTransition
        key="overlay"
        classNames="md"
        timeout={{ enter: 250, exit: 250 }}
      >
        <Overlay />
      </CSSTransition>
    ) : null}
  </TransitionGroup>
)

ModalOverlay.displayName = 'ModalOverlay'
ModalOverlay.propTypes = {
  show: propTypes.bool,
}

export default ModalOverlay
