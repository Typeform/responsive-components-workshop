import styled from 'styled-components'

const Root = styled.div`
  margin-top: ${p => p.top * 10}px;
  margin-left: ${p => p.left * 10}px;
  margin-bottom: ${p => p.bottom * 10}px;
  margin-right: ${p => p.right * 10}px;
`

export default Root
