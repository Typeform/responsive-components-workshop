import React from 'react'

import styled from 'styled-components'

const Root = styled.div``

const Title = styled.p`
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 5px;
`

const List = styled.ul`
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  padding: 0;

  li {
    list-style: none;
  }

  a {
    font: inherit;
    color: inherit;
  }
`

export default () => (
  <Root>
    <Title>Popular on GOV.UK</Title>
    <List>
      <li>
        <a href='#'>Universal Jobmatch job search</a>
      </li>
      <li>
        <a href='#'>Renew vehicle tax</a>
      </li>
      <li>
        <a href='#'>Log in to student finance</a>
      </li>
      <li>
        <a href='#'>Book your theory test</a>
      </li>
      <li>
        <a href='#'>Personal tax account</a>
      </li>
    </List>
  </Root>
)
