import styled from 'styled-components'
import Text from './text'

const WelcomeText = styled(Text).attrs({
  fontSize: '32px',
  bold: true
})`
  @media (min-width: 769px) {
    font-size: 48px;
  }
`

export default WelcomeText
