import styled from 'styled-components'

const Link = styled.a`
  color: ${props => props.color ? props.color : 'inherit'};
  font-size: 14px;
  font-weight: bold;
`

export default Link
