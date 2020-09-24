import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'

const ModalHeaderContainer = styled('div')`
  margin-bottom: ${(props) => props.theme.layout.padding};
`

const ModalTitle = styled('p')`
  ${(props) => props.theme.fonts.headingsStyle}
  font-size: ${(props) => props.theme.fonts.sizes.h2};
  margin: 0 0 0 -0.1rem;
`

const ModalSubtitle = styled('p')`
  margin-top: 1rem;
  line-height: 1.4;
`

const ModalHeader = ({ title, subtitle, id = 'dialogTitle' }) => {
  return (
    <ModalHeaderContainer>
      <ModalTitle id={id}>{title}</ModalTitle>
      {subtitle && <ModalSubtitle>{subtitle}</ModalSubtitle>}
    </ModalHeaderContainer>
  )
}

ModalHeader.displayName = 'ModalHeader'
ModalHeader.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  id: propTypes.string,
}

export default ModalHeader
