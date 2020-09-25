import React from 'react'
import propTypes from 'prop-types'
import { Button } from '..'
import { X } from 'react-feather'
import styled from '@emotion/styled'

const AlertContainer = styled('li')`
  display: block;
  float: left;
  clear: left;
  padding: 0;
  margin: 1rem 0 0;
  line-height: 1.2;
  transition: all 250ms ease;

  & button {
    padding: 1rem 1rem 1rem 2rem;
    line-height: 1rem;
    font-size: ${(props) => props.theme.fonts.sizes.small};
    border-radius: ${(props) => props.theme.borderRadius.small};
    background-color: ${(props) => props.theme.colors.error};
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
  }
`

const AlertIcon = styled('span')`
  position: relative;
  top: 0rem;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin: 0 0 0 1rem;
`

const Alert = ({ message, dismiss }) => {
  return (
    <AlertContainer>
      <Button onClick={dismiss}>
        <span>{message}</span>
        <AlertIcon>
          <X size={20} />
        </AlertIcon>
      </Button>
    </AlertContainer>
  )
}

Alert.displayName = 'Alert'
Alert.propTypes = {
  message: propTypes.string,
  dismiss: propTypes.func,
}

export default Alert
