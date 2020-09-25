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
    children: propTypes.node.isRequired,
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo })
  }

  render() {
    const { logError, reload } = this.props
    const { hasError, error, errorInfo } = this.state
    return hasError ? (
      <ErrorPage
        error={error}
        errorInfo={errorInfo}
        logError={logError}
        reload={reload}
      />
    ) : (
      this.props.children
    )
  }
}

ErrorBoundary.displayName = 'ErrorBoundary'

export default ErrorBoundary
