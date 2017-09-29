import styled from 'styled-components'

const Link = styled.a`
  color: ${props => props.color ? props.color : 'inherit'};
`

export default Link
