import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import { FlexCentered, Greeting, Page, Button } from '..'
import styled from '@emotion/styled'

const ErrorDetails = styled('div')`
  margin: 3rem 0 0;
  font-family: ${(props) => props.theme.fonts.mono.fontFamily};

  & h2 {
    font-family: inherit;
    font-size: ${(props) => props.theme.fonts.sizes.h4};
    margin: 0 0 1.5rem;
  }

  p {
    font-size: ${(props) => props.theme.fonts.sizes.small};
  }

  pre {
    margin: 0;
  }
`

const ErrorPage = ({ error, errorInfo, logError, reload, context }) => {
  const [eventId, setEventId] = useState(null)
  const errorObj = error.message
    ? { title: 'Unexpected Error', detail: error.message }
    : error
  const { title, detail, params } = errorObj
  const messages = params ? Object.entries(params) : []
  const stackTrace =
    errorInfo && errorInfo.componentStack
      ? errorInfo.componentStack.toString()
      : null

  useEffect(() => {
    const err = error.message ? error : new Error(error.detail)
    const extra = errorInfo || error
    const evtId = logError(err, extra, context)
    setEventId(evtId)
  }, [error, errorInfo, logError, context])

  return (
    <Page isError={true}>
      <FlexCentered>
        <Greeting title="Fatal Error">
          <p>Please try reloading the page.</p>
          <p>If this issue persists, please contact Open Tender Support.</p>
          <Button text="Tap to Reload Page" color="error" onClick={reload} />
          <ErrorDetails>
            <h2>{title}</h2>
            <p>{detail}</p>
            {eventId && <pre>Event ID: {eventId}</pre>}
            {stackTrace && <pre>{stackTrace}</pre>}
            {messages.length > 0 && (
              <ul>
                {messages.map(([key, message], index) => (
                  <li key={`${key}-${index}`}>
                    {key}: {message}
                  </li>
                ))}
              </ul>
            )}
          </ErrorDetails>
        </Greeting>
      </FlexCentered>
    </Page>
  )
}

ErrorPage.displayName = 'ErrorPage'
ErrorPage.propTypes = {
  error: propTypes.object,
  errorInfo: propTypes.object,
  logError: propTypes.func,
  reload: propTypes.func,
  context: propTypes.object,
}

export default ErrorPage
