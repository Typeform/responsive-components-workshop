import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  background-color: #005ea5;
  width: 100%;
  max-width: 1020px;
  padding: 25px 20px;
`

const Header = styled.h1``

const LayoutSubtitle = styled.div`
  margin-top: 15px;
`

const LayoutSearch = styled.div`
  margin-top: 20px;
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

const LayoutContent = styled.div`
  margin-top: 30px;
`

const Paragraph = styled.p`
  font-size: ${p => p.small ? '12px' : '16px'};
  line-height: ${p => p.small ? '15px' : '20px'};
  font-weight: ${p => p.bold ? 'bold' : 'normal'};
`

const LayoutList = styled.div`
  margin-top: 5px;
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
  font-weight: bold;
  color: white;
`

export default () => (
  <Content>
    <Header>Welcome to GOV.UK</Header>

    <LayoutSubtitle>
      <Paragraph>The best place to find government services and information</Paragraph>
      <Paragraph bold>Simpler, clearer, faster</Paragraph>
    </LayoutSubtitle>
    <LayoutSearch>
      <Input type='text' placeholder='Search GOV.UK' />
    </LayoutSearch>
    <LayoutContent>
      <Paragraph small>Popular on GOV.UK</Paragraph>
      <LayoutList>
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
      </LayoutList>
    </LayoutContent>
  </Content>
)
