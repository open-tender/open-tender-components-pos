import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { Button } from '..'

const RefundRemoveContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 0 0 4rem;
`

const RefundRemove = ({ removed, remove, addBack }) => {
  return (
    <RefundRemoveContainer>
      {removed ? (
        <Button
          text="Add Back"
          onClick={addBack}
          size="xsmall"
          color="active"
        />
      ) : (
        <Button text="Remove" onClick={remove} size="xsmall" color="error" />
      )}
    </RefundRemoveContainer>
  )
}

RefundRemove.displayName = 'RefundItem'
RefundRemove.propTypes = {
  removed: propTypes.bool,
  remove: propTypes.func,
  addBack: propTypes.func,
}

export default RefundRemove
