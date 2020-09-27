import propTypes from 'prop-types'
import styled from '@emotion/styled'

const ModalyBody = styled('div')`
  // & > div {
  //   margin: 0 0 ${(props) => props.theme.layout.padding};
  // }
  & p + p {
    margin: 1.5rem 0 0;
  }
`

ModalyBody.displayName = 'ModalyBody'
ModalyBody.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default ModalyBody
