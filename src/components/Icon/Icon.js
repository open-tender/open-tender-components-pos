import styled from '@emotion/styled'

const Icon = styled('span')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || '1.8rem'};
  height: ${(props) => props.height || '1.8rem'};
`

Icon.displayName = 'Icon'

export default Icon
