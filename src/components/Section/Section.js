import propTypes from 'prop-types'
import styled from '@emotion/styled'

const Section = styled('div')`
  flex-grow: 1;
  overflow-y: scroll;
`

Section.displayName = 'Section'
Section.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default Section
