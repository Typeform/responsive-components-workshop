import React from 'react'
import styled from 'styled-components'

import PopularPages from '../components/popular-pages'

const Root = styled.div`
  font-family: Arial;
  background-color: #005ea5;
  color: white;
  -webkit-font-smoothing: antialiased;
  width: 100%;
  max-width: 1020px;
  padding: 25px 20px 20px 20px;
`

const Title = styled.h1`
  font-size: 32px;
  line-height: 35px;
  font-weight: bold;
  margin-bottom: 15px;
`

const SubTitle = styled.h1`
  font-size: 16px;
  line-height: 20px;
  font-weight: normal;
  margin-bottom: 20px;
`

const SearchInput = styled.input.withConfig({ type: 'text' })`
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 19px;
  margin-bottom: 30px;
`

export default () => (
  <Root>
    <Title>Welcome to GOV.UK</Title>
    <SubTitle>
      The best place to find government services and information
      <br />
      <strong>Simpler, clearer, faster</strong>
    </SubTitle>
    <SearchInput placeholder='Search GOV.UK' />
    <PopularPages />
  </Root>
)
