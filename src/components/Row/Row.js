import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'

const RowContainer = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  margin: 0 0 1.5rem;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  background-color: ${(props) => props.rowColor || props.theme.colors.bg4};
  overflow: hidden;
`

const RowHeaderContainer = styled('div')`
  position: relative;
  flex: 0 0 28rem;
  min-width: 28rem;
  overflow: hidden;
  padding: 1.5rem 0.5rem 1.5rem ${(props) => props.theme.layout.paddingSmall};
  background-color: ${(props) => props.headerColor || props.theme.colors.bg1};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const RowContentContainer = styled('div')`
  flex: 1 0 0;
  padding: ${(props) => props.theme.layout.paddingSmall};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Row = ({
  header,
  expand = null,
  rowColor = null,
  headerColor = null,
  style = null,
  children,
}) => {
  return (
    <RowContainer style={style} rowColor={rowColor}>
      {header && (
        <RowHeaderContainer headerColor={headerColor}>
          {expand}
          {header}
        </RowHeaderContainer>
      )}
      <RowContentContainer>{children}</RowContentContainer>
    </RowContainer>
  )
}

Row.displayName = 'Row'
Row.propTypes = {
  header: propTypes.node,
  expand: propTypes.node,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  style: propTypes.object,
  rowColor: propTypes.string,
  headerColor: propTypes.string,
}

export default Row
