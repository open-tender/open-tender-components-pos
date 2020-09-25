import React from 'react'
import propTypes from 'prop-types'
// import logo from '../../assets/logo.png'
import styled from '@emotion/styled'
import { FlexCentered, Greeting, Loading } from '..'

const Logo = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    display: block;
    width: 26rem;
    margin: 0 0 2rem;
    pointer-events: none;
  }

  & code {
    display: block;
    font-size: ${(props) => props.theme.fonts.sizes.large};
  }
`

const LoadingLogo = ({ logo }) => {
  return (
    <FlexCentered>
      <Greeting>
        <Logo>
          <img src={logo} className="logo" alt="logo" />
          <code>an open platform for restaurant innovation</code>
        </Logo>
        <Loading />
      </Greeting>
    </FlexCentered>
  )
}

LoadingLogo.displayName = 'LoadingLogo'
LoadingLogo.propTypes = {
  logo: propTypes.node,
}
export default LoadingLogo
