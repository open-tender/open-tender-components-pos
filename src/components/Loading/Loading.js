import React from 'react'
import propTypes from 'prop-types'
import { BarLoader } from 'react-spinners'
import styled from '@emotion/styled'

const LoadingContainer = styled('div')`
  max-width: 48rem;
  padding: 2rem;
  ${(props) => (props.centered ? 'margin: 0 auto' : null)};
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
`

const LoadingMsg = styled('p')`
  font-size: ${(props) => props.theme.fonts.sizes.small};
  margin: 0 0 1rem;
`

const LoadingLoader = styled('div')`
  display: inline-block;
`

const Loading = ({ msg, centered = true }) => {
  return (
    <LoadingContainer centered={centered}>
      {msg && <LoadingMsg>{msg}</LoadingMsg>}
      <LoadingLoader>
        <BarLoader width={80} height={3} loading={true} color="#ffffff" />
      </LoadingLoader>
    </LoadingContainer>
  )
}

Loading.displayName = 'Loading'
Loading.propTypes = {
  msg: propTypes.string,
  centered: propTypes.bool,
}

export default Loading
