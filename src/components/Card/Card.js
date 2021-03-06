import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { Scrollable } from '../Scrollable'

const CardContainer = styled('div')`
  flex: 0 0 ${(props) => props.theme.layout.cardWidth};
  // @media (max-width: 1366px) {
  //   max-width: ${(props) => props.theme.layout.cardWidthTablet};
  // }
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
  background-color: ${(props) => props.theme.colors.bg1};
`

const CardMain = styled('div')`
  width: 100%;
  flex-grow: 1;
  ${(props) =>
    props.noScrollable ? 'overflow-y: scroll' : 'overflow: hidden'};
`

const CardFooter = styled('div')`
  position: relative;
  width: 100%;
  flex-grow: 0;
`

const Card = ({ header, main, footer, style = null, noScrollable = false }) => {
  return (
    <CardContainer style={style}>
      <CardContent>
        <CardHeader>{header}</CardHeader>
        <CardMain noScrollable={noScrollable}>
          {noScrollable ? main : <Scrollable>{main}</Scrollable>}
        </CardMain>
        <CardFooter>{footer}</CardFooter>
      </CardContent>
    </CardContainer>
  )
}

Card.displayName = 'Card'
Card.propTypes = {
  header: propTypes.node,
  main: propTypes.node,
  footer: propTypes.node,
  style: propTypes.object,
  noScrollable: propTypes.bool,
}

export default Card
