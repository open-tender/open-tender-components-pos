import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'

const RowHeaderContainer = styled('div')`
  width: 100%;
  text-align: left;
`

const RowHeaderTitle = styled('h3')`
  width: 100%;
  margin: 0 0 1rem -0.04em;
  line-height: 1.2;
  ${(props) => props.theme.ellipsis}
`

const RowHeaderSubtitle = styled('div')`
  font-size: ${(props) => props.theme.fonts.sizes.small};
`

const RowHeader = ({ title, children, style = null }) => {
  return (
    <RowHeaderContainer style={style}>
      <RowHeaderTitle>{title}</RowHeaderTitle>
      <RowHeaderSubtitle>{children}</RowHeaderSubtitle>
    </RowHeaderContainer>
  )
}

RowHeader.displayName = 'RowHeader'
RowHeader.propTypes = {
  title: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  style: propTypes.object,
}

export default RowHeader
