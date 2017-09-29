import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  font-size: 32px;
  font-weight: bold;
`
HeaderWrapper.displayName = 'HeaderWrapper'

const Header = ({ children }) => {
  return <HeaderWrapper>{children}</HeaderWrapper>
}

Header.propTypes = {
  children: PropTypes.node
}

export default Header
