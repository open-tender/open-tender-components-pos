import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'

const ErrorMessageContainer = styled('div')`
  max-width: 60rem;
  padding: ${(props) => props.theme.layout.padding};
  margin: 0 auto;
  text-align: center;
  background-color: ${(props) => props.theme.colors.error};
  border-radius: ${(props) => props.theme.borderRadius.large};

  p {
    margin: 1em 0;
    &:last-child {
      margin-bottom: 0;
    }
  }

  ul li {
    font-family: ${(props) => props.theme.fonts.mono.fontFamily};
    font-size: ${(props) => props.theme.fonts.sizes.small};
  }
`

const ErrorMessage = ({ error }) => {
  const err = typeof error === 'string' ? { detail: error } : error
  const { title = 'Something went wrong', detail, params } = err
  const messages = params ? Object.entries(params || {}) : []

  return error ? (
    <ErrorMessageContainer>
      <h2>{title}</h2>
      <p>{detail}</p>
      {messages.length > 0 && (
        <ul>
          {messages.map(([key, message], index) => {
            console.log(key)
            const field = key.replace('$.', '')
            return (
              <li key={`${key}-${index}`}>
                {field}: {message}
              </li>
            )
          })}
        </ul>
      )}
      <p>Please contact Open Tender Support if this issue persists.</p>
    </ErrorMessageContainer>
  ) : null
}

ErrorMessage.displayName = 'ErrorMessage'
ErrorMessage.propTypes = {
  error: propTypes.oneOfType([propTypes.string, propTypes.object]),
}
export default ErrorMessage
