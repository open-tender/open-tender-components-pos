// import React from 'react'
// import { withTheme } from 'emotion-theming'
import propTypes from 'prop-types'
import styled from '@emotion/styled'

const FlexContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    margin: 0 ${(props) => props.padding || props.theme.layout.padding} 0 0;
    &:last-child {
      margin: 0;
    }
  }
`

// const FlexContainer = withTheme(
//   ({ element = 'div', padding, children, theme }) => {
//     const StyledFlexContainer = styled(element)`
//       display: flex;
//       justify-content: space-between;
//       align-items: center;

//       & div {
//         margin: 0 ${padding || theme.layout.padding} 0 0;
//         &:last-child {
//           margin: 0;
//         }
//       }
//     `
//     return <StyledFlexContainer>{children}</StyledFlexContainer>
//   }
// )

FlexContainer.displayName = 'FlexContainer'
FlexContainer.propTypes = {
  // element: propTypes.oneOfType([propTypes.string, propTypes.element]),
  padding: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  theme: propTypes.object,
}

export default FlexContainer
