import React from 'react'
import propTypes from 'prop-types'

const Greeting = ({ title, children }) => {
  return (
    <div className="greeting slide-up">
      {title && <h1 className="greeting__title">{title}</h1>}
      <div className="greeting__content text">{children}</div>
    </div>
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
