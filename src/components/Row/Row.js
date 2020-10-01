import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'

const RowContainer = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0 0 1.5rem;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  background-color: ${(props) => props.theme.colors.bg4};
  overflow: hidden;
`

const RowHeaderContainer = styled('div')`
  position: relative;
  flex: 0 0 28rem;
  min-width: 28rem;
  overflow: hidden;
  padding: 2rem 0.5rem 2rem 3rem;
  padding-right: 0.5rem;
  background-color: ${(props) => props.theme.colors.bg1};
`

const RowContentContainer = styled('div')`
  flex: 1 0 0;
  padding: 0 ${(props) => props.theme.layout.paddingSmall};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Row = ({ header, children, style = null }) => {
  return (
    <RowContainer style={style}>
      <RowHeaderContainer>{header}</RowHeaderContainer>
      <RowContentContainer>{children}</RowContentContainer>
    </RowContainer>
  )
}

Row.displayName = 'Row'
Row.propTypes = {
  header: propTypes.node,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  style: propTypes.object,
}

export default Row
