import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'

const SectionHeaderContainer = styled('div')`
  width: 100%;
  margin: 0 0 ${(props) => props.theme.layout.padding};

  & p {
    margin: 1.5rem 0 0;
  }
`

const SectionHeader = ({ title, subtitle }) => {
  return (
    <SectionHeaderContainer>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </SectionHeaderContainer>
  )
}

SectionHeader.displayName = 'SectionHeader'
SectionHeader.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
}

export default SectionHeader
