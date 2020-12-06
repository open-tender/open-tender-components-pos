import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'

const InfoListItem = styled('li')`
  display: inline-block;
  padding: 0 0 0 0.6rem;
  border-left: 0.1rem solid ${(props) => props.theme.colors.border};
  margin: 0 0 0 0.6rem;
  &:first-of-type {
    padding: 0;
    border: 0;
    margin: 0;
  }
`

const InfoListContainer = styled('ul')`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  li {
    display: block;
    line-height: 1;
    padding: 0 0 0 0.6rem;
    border-left: 0.1rem solid ${(props) => props.theme.colors.border};
    margin: 0 0 0 0.6rem;
    &:first-of-type {
      padding: 0;
      border: 0;
      margin: 0;
    }
  }
`

const InFoList = ({ items }) => {
  return (
    <div>
      <InfoListContainer>
        {items.map((item, index) => (
          <li key={`info-${index}`}>{item}</li>
        ))}
      </InfoListContainer>
    </div>
  )
}

InFoList.displayName = 'InFoList'
InFoList.propTypes = {
  items: propTypes.array,
}

export default InFoList
