import React, { useState } from 'react';

import { 
  User,
  Logo, 
  Logout, 
  Avatar, 
  Content, 
  UserName, 
  Container, 
  Greetings,
} from './styles';

import { Menu } from '../Menu';
import LogoImg from '../../assets/images/Logo.svg';

export function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <Container>
      <Content>
        <Logo src={LogoImg} />

        <Logout>
          <User>
            <Greetings>Bem-Vindo,</Greetings>
            <UserName>Gustavo Oliveira</UserName>
          </User>
          <Avatar src={'https://avatars.githubusercontent.com/u/65258678?v=4'}/>
        </Logout>

        { menu && <Menu /> }
      </Content>
    </Container>
  )
}