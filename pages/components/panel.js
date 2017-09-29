import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PanelWrapper = styled.div`
  color: ${props => (props.color ? props.color : '')};
  background-color: ${props => (props.bgcolor ? props.bgcolor : '')};
  padding: ${props => (props.padding ? props.padding : '0')};
`

const Panel = ({ children, ...props }) => {
  return <PanelWrapper {...props}>{children}</PanelWrapper>
}

Panel.propTypes = {
  children: PropTypes.node
}

export default Panel
