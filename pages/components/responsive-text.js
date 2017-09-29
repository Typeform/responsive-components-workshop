import styled from 'styled-components'
import Text from './text'

const ResponsiveText = styled(Text)`
  @media (min-width: 769px) {
    font-size: 19px;
  }
`

export default ResponsiveText
