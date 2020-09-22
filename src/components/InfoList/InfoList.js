import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'

const InfoListItem = styled('li')`
  display: inline-block;
  padding: 0 0 0 0.6rem;
  border-left: 0.1rem solid ${(props) => props.theme.colors.border};
  margin: 0 0 0 0.6rem;
  &:first-child {
    padding: 0;
    border: 0;
    margin: 0;
  }
`

const InFoList = ({ items }) => {
  return items.map((item, index) => (
    <InfoListItem key={`info-${index}`}>{item}</InfoListItem>
  ))
}

InFoList.displayName = 'InFoList'
InFoList.propTypes = {
  items: propTypes.array,
}

export default InFoList
