import React from 'react'
import Header from './components/header'
import Link from './components/link'
import List from './components/list'
import Panel from './components/panel'
import Searchbox from './components/searchbox'
import Spacer from './components/spacer'
import Text from './components/text'

export default () => (
  <Panel
    color='white'
    bgcolor='#005ea5'
    padding='25px 20px 0 20px'
  >
    <Header>Welcome to GOV.UK</Header>
    <Spacer value='20px' />
    <Text>The best place to find government services and information</Text>
    <Text bold>Simpler, clearer, faster</Text>
    <Spacer value='20px' />
    <Searchbox placeholder='Search GOV.UK' />
    <Spacer value='20px' />
    <Text fontSize='12px'>Popular on GOV.UK</Text>
    <Spacer value='5px' />
    <List>
      <li>
        <Link href='#'>Universal Jobmatch job search</Link>
      </li>
      <li>
        <Link href='#'>Renew vehicle tax</Link>
      </li>
      <li>
        <Link href='#'>Log in to student finance</Link>
      </li>
      <li>
        <Link href='#'>Book your theory test</Link>
      </li>
      <li>
        <Link href='#'>Personal tax account</Link>
      </li>
    </List>
    <Spacer value='20px' />
  </Panel>
)
