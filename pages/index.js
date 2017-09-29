import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background: #005ea5;
color: white;
width: 100%;
max-width: 1020px;
padding: 25px 20px 20px 20px;
`
const Title = styled.h1`
font-size: 32px;
line-height: 35px;
font-weight: bold;
margin-bottom: 20px;
`
const Paragraph = styled.p`
font-size: 16px;
line-height: 20px;`
const Input = styled.input`
padding: 6px;
margin: 0.5em 0;
width: 100%;
height: 40px;
border: 0;
font-weight: 400;
text-transform: none;
font-size: 16px;
line-height: 1.75;
background: #fff;
border-radius: 0;
-webkit-appearance: none;
-moz-appearance: none;
font-size: 19px;
line-height: 1.47368;
margin-bottom: 30px;
`
const List = styled.ul`
font-size: 14px;
line-height: 20px;
font-weight: bold;
padding: 0;
`
const ListItem = styled.li`
list-style: none;
`
const Link = styled.a`
color: white;

:hover {
  color: #ccc;
}
`
const SubTitle = styled.div`
font-size: 12px;
line-height: 15px;`


export default () => (
  <Container>
    <Title>Welcome to GOV.UK</Title>
    <Paragraph>The best place to find government services and information</Paragraph>
    <Paragraph><b>Simpler, clearer, faster</b></Paragraph>
    <Input type='text' placeholder='Search GOV.UK' />
    <SubTitle>Popular on GOV.UK</SubTitle>
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
  </Container>
)
