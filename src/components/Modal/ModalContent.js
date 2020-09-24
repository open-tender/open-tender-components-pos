import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ModalContainer from './ModalContainer'

const Content = styled('div')`
  position: relative;
  width: 60rem;
  max-width: 90%;
  overflow: hidden;
  padding: 4rem;
  background: ${(props) => props.theme.colors.bg4};
  border-radius: ${(props) => props.theme.borderRadius.large};
  border: 0.2rem solid ${(props) => props.theme.fonts.body.color};
`

const ModalContent = ({ show, close, scrollable, style, children }) => {
  return (
    <TransitionGroup component={null}>
      {show ? (
        <CSSTransition
          key="modal"
          classNames="md"
          timeout={{ enter: 250, exit: 250 }}
        >
          <ModalContainer
            id="modal-container"
            onPointerUp={close}
            scrollable={scrollable}
          >
            <Content role="dialog" aria-labelledby="dialogTitle" style={style}>
              {children}
            </Content>
          </ModalContainer>
        </CSSTransition>
      ) : null}
    </TransitionGroup>
  )
}

ModalContent.displayName = 'ModalContent'
ModalContent.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  show: propTypes.bool,
  close: propTypes.func,
  style: propTypes.object,
  scrollable: propTypes.bool,
}

export default ModalContent
