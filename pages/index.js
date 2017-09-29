import React from 'react'
import Link from './components/link'
import List from './components/list'
import Panel from './components/panel'
import Searchbox from './components/searchbox'
import Spacer from './components/spacer'
import Text from './components/text'
import WelcomeText from './components/welcome'

export default () => (
  <Panel
    color='white'
    bgcolor='#005ea5'
    padding='25px 20px 20px 20px'
  >
    <WelcomeText>Welcome to GOV.UK</WelcomeText>
    <Spacer bottom='4' />
    <Text>The best place to find government services and information</Text>
    <Text bold>Simpler, clearer, faster</Text>
    <Spacer bottom='4' />
    <Searchbox placeholder='Search GOV.UK' />
    <Spacer bottom='4' />
    <Text fontSize='12px'>Popular on GOV.UK</Text>
    <Spacer bottom='1' />
    <List>
      <li>
        <Link href='#' color='white'>
          <Text fontSize='14px' bold>Universal Jobmatch job search</Text>
        </Link>
      </li>
      <li>
        <Link href='#' color='white'>
          <Text fontSize='14px' bold>Renew vehicle tax</Text>
        </Link>
      </li>
      <li>
        <Link href='#' color='white'>
          <Text fontSize='14px' bold>Log in to student finance</Text>
        </Link>
      </li>
      <li>
        <Link href='#' color='white'>
          <Text fontSize='14px' bold>Book your theory test</Text>
        </Link>
      </li>
      <li>
        <Link href='#' color='white'>
          <Text fontSize='14px' bold>Personal tax account</Text>
        </Link>
      </li>
    </List>
  </Panel>
)
