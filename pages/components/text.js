import styled from 'styled-components'

const Text = styled.p`
  color: ${props => props.color ? props.color : 'inherit'};
  font-size: ${props => props.fontSize ? props.fontSize : '16px'};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
`

export default Text
