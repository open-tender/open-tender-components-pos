import React from 'react'
import propTypes from 'prop-types'
import { ErrorPage } from '..'

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: '',
    errorInfo: null,
    eventId: null,
  }

  static propTypes = {
    logError: propTypes.func,
    reload: propTypes.func,
    context: propTypes.object,
    children: propTypes.node.isRequired,
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo })
  }

  render() {
    const { logError, reload, context } = this.props
    console.log('ErrorBoundary', context)
    const { hasError, error, errorInfo } = this.state
    return hasError ? (
      <ErrorPage
        error={error}
        errorInfo={errorInfo}
        logError={logError}
        reload={reload}
        context={context}
      />
    ) : (
      this.props.children
    )
  }
}

ErrorBoundary.displayName = 'ErrorBoundary'

export default ErrorBoundary
