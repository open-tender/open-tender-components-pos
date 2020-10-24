import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'

const BucketContainer = styled('div')`
  padding: 1.25rem 1.5rem 1.25rem;
  margin: 0 0 3rem;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  background-color: ${(props) => props.theme.colors.bg4};
`

const BucketTime = styled('div')`
  ${(props) => props.theme.fonts.headingsStyle}
  font-size: ${(props) => props.theme.fonts.sizes.h3};
  color: ${(props) => props.theme.colors[props.color]};
  letter-spacing: 0;
  margin: 0 0 1rem;
`

const BucketCounts = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const BucketCount = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;

  &:first-of-type {
    align-items: flex-start;
  }
`

const BucketCountCount = styled('div')`
  ${(props) => props.theme.fonts.headingsStyle}
  font-size: ${(props) => props.theme.fonts.sizes.h2};
  font-weight: 900;
  letter-spacing: 0;
`

const BucketCountLabel = styled('div')`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textSecondary}
  margin: 0.2rem 0 0;
`

const Bucket = ({ title, color = 'text', orderCount, itemCounts }) => {
  return (
    <BucketContainer>
      <BucketTime color={color}>{title}</BucketTime>
      <BucketCounts>
        <BucketCount>
          <BucketCountCount>{orderCount}</BucketCountCount>
          <BucketCountLabel>orders</BucketCountLabel>
        </BucketCount>
        {itemCounts.map(([name, count]) => (
          <BucketCount key={name}>
            <BucketCountCount>{count}</BucketCountCount>
            <BucketCountLabel>{name.toLowerCase()}s</BucketCountLabel>
          </BucketCount>
        ))}
      </BucketCounts>
    </BucketContainer>
  )
}

Bucket.displayName = 'Sidebar'
Bucket.propTypes = {
  title: propTypes.string,
  color: propTypes.string,
  orderCount: propTypes.number,
  itemCounts: propTypes.array,
}
export default Bucket
