import React from 'react'
import styled from 'styled-components'

const SearchboxInput = styled.input`
  height: 40px;
  padding: 0 15px;
  font-size: 19px;
  width: 100%;
`
SearchboxInput.displayName = 'SearchboxInput'

const Searchbox = (props) => {
  return (
    <SearchboxInput {...props} />
  )
}

export default Searchbox
