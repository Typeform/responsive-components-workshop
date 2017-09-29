import styled from 'styled-components'

const Spacer = styled.div`
  margin-top: ${props => props.top ? `${props.top * 5}px` : '0'};
  margin-bottom: ${props => props.bottom ? `${props.bottom * 5}px` : '0'};
  margin-left: ${props => props.left ? `${props.left * 5}px` : '0'};
  margin-right: ${props => props.right ? `${props.right * 5}px` : '0'};
`

export default Spacer
