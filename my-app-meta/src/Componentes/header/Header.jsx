import React from 'react'
import minhaLogo from '../../assets/imagens/Logo.svg';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components'; 

const HeaderContainer = styled.header`
background-color: #ffffff;
padding: 20px 0;
`;

const StyledNav = styled.nav `
color: #333333;

a {
  color: black;
  text-decoration: none;
  transition: color 0.3s ease;
  margin-right: 20px;

  &:hover{
    color: #ddd;
  }
}

`;

export const Header = () => {
  return (
  <HeaderContainer>
    <Container>
      <Row className="align-items-center">
        <Col xs={4}> 
        <img className='logo' src={minhaLogo} alt="logo-empresa" />
        </Col>
        <Col xs={8}>
        <StyledNav>
          <a href="#">INÍCIO</a>
          <a href="#">SOBRE</a>
          <a href="#">MENU</a>
          <a href="#">RESERVAS</a>
          <a href="#">PEDIDOS</a>
          <a href="#">ENTRAR</a>
        </StyledNav>
        </Col>
        </Row>
        </Container>
  </HeaderContainer>
  )
}
