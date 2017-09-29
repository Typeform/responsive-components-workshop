import React from 'react'
import styled from 'styled-components'
import Text from './text'
import Spacer from './spacer'

const Container = styled.div`
background: #005ea5;
color: white;
width: 100%;
max-width: 1020px;
padding: 25px 20px 20px 20px;
`
const Input = styled.input`
height: 40px;
width: 100%;
border: none;
outline: none;
padding-left: 15px;
padding-right: 15px;
font-size: 19px;
`
const List = styled.ul`
padding: 0;
`
const ListItem = styled.li`
list-style: none;
`
const Link = styled.a`
color: inherit;

:hover {
  color: #ccc;
}
`

export default () => (
  <Container>
    <Spacer bottom='1.5'>
      <Text size='xlarge' fontWeight='bold'>Welcome to GOV.UK</Text>
    </Spacer>
    <Text>The best place to find government services and information</Text>
    <Text fontWeight='bold'>Simpler, clearer, faster</Text>
    <Spacer bottom='3' top='2'>
      <Input type='text' placeholder='Search GOV.UK' />
    </Spacer>
    <Text size='xsmall'>Popular on GOV.UK</Text>
    <Text size='small' fontWeight='bold'>
      <List>
        <ListItem>
          <Link href='#'>Universal Jobmatch job search</Link>
        </ListItem>
        <ListItem>
          <Link href='#'>Renew vehicle tax</Link>
        </ListItem>
        <ListItem>
          <Link href='#'>Log in to student finance</Link>
        </ListItem>
        <ListItem>
          <Link href='#'>Book your theory test</Link>
        </ListItem>
        <ListItem>
          <Link href='#'>Personal tax account</Link>
        </ListItem>
      </List>
    </Text>
  </Container>
)
