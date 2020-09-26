import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'

const CardContainer = styled('div')`
  flex: 0 0 ${(props) => props.theme.layout.cardWidth};
  height: 100%;
  padding: 0 0 ${(props) => props.theme.layout.padding};
`

const CardContent = styled('div')`
  width: 100%;
  height: 100%;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  background-color: ${(props) => props.theme.colors.bg4};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  overflow: hidden;
`

const CardHeader = styled('div')`
  position: relative;
  width: 100%;
  flex-grow: 0;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.bg1};
`

const CardMain = styled('div')`
  width: 100%;
  flex-grow: 1;
  padding: 1.5rem;
  overflow-y: scroll;
  -webkit-overflow-scrolling: auto;
`

const CardFooter = styled('div')`
  position: relative;
  width: 100%;
  flex-grow: 0;
  padding: 1.5rem;
`

const Card = ({ header, main, footer, style = null }) => {
  return (
    <CardContainer style={style}>
      <CardContent>
        <CardHeader>{header}</CardHeader>
        <CardMain>{main}</CardMain>
        <CardFooter>{footer}</CardFooter>
      </CardContent>
    </CardContainer>
  )
}

Card.displayName = 'Card'
Card.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default Card
