import React from 'react'
import propTypes from 'prop-types'
// import { css } from '@emotion/core'
import styled from '@emotion/styled'
// import { useTheme } from 'emotion-theming'
// import './greeting.scss'

const GreetingContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 72rem;
  margin: 0 0 8rem;
  text-align: center;
`

const GreetingTitle = styled('h1')`
  font-size: ${(props) => props.theme.fonts.sizes.mega};
  font-weight: 400;
`

const GreetingContent = styled('div')`
  margin: 2rem 0 0;
  p {
    margin: 0 0 1rem;
  }
  p:last-child {
    margin: 0;
  }
`

const Greeting = ({ title, children }) => {
  // const theme = useTheme()
  return (
    <GreetingContainer>
      {title && <GreetingTitle>{title}</GreetingTitle>}
      <GreetingContent>{children}</GreetingContent>
    </GreetingContainer>
  )
}

Greeting.displayName = 'Greeting'
Greeting.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default Greeting
