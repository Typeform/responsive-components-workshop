import React from 'react'
import styled from 'styled-components'

const Spacer = styled.div`
  ${props => `
    margin-top: ${10 * props.top}px;
    margin-bottom: ${10 * props.bottom}px;
    margin-left: ${10 * props.left}px;
    margin-right: ${10 * props.right}px;
  `}
`

export default Spacer
