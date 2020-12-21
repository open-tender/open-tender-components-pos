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

const tagline = 'an open platform for restaurant innovation'

const LoadingMsg = () => (
  <>
    <p>Starting up. Please do not reload the page.</p>
    <p>This could take up to 60 seconds.</p>
  </>
)

const LoadingLogo = ({ logo, isLoading = false }) => {
  return (
    <FlexCentered>
      <Greeting>
        <Logo>
          <img src={logo} className="logo" alt="logo" />
          <code>{isLoading ? <LoadingMsg /> : tagline}</code>
        </Logo>
        <Loading />
      </Greeting>
    </FlexCentered>
  )
}

LoadingLogo.displayName = 'LoadingLogo'
LoadingLogo.propTypes = {
  logo: propTypes.node,
  isLoading: propTypes.bool,
}
export default LoadingLogo
