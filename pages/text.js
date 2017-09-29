import React from 'react'
import styled from 'styled-components'

const SIZES = {
  xlarge: {
    fontSize: 32,
    lineHeight: 35
  },
  large: {
    fontSize: 19,
    lineHeight: 19
  },
  medium: {
    fontSize: 16,
    lineHeight: 20
  },
  small: {
    fontSize: 14,
    lineHeight: 20
  },
  xsmall: {
    fontSize: 12,
    lineHeight: 15
  }
}

const Text = styled.div`
  ${props => SIZES[props.size] && `
    font-size: ${SIZES[props.size].fontSize}px;
    line-height: ${SIZES[props.size].lineHeight}px;
  `}
  ${props => props.fontWeight && `
    font-weight: ${props.fontWeight};
  `}
`

Text.defaultProps = {
  size: 'medium'
}

export default Text
