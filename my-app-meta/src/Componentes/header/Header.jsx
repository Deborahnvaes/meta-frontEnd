import React from "react";
import minhaLogo from "../../assets/imagens/Logo.svg";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;

  a {
    color: #333;
    text-decoration: none;
    margin-left: 15px;
    font-size: 16px;
  }

  a:hover {
    color: #ff6600;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Row className="align-items-center">
          <Col xs={8}>
            <img className="logo" src={minhaLogo} alt="logo-empresa" />
          </Col>
          <Col xs={4}>
            <StyledNav>
              <Navbar expand="lg" variant="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <StyledNav className="ml-auto">
                    <a href="#">INÍCIO</a>
                    <a href="#">SOBRE</a>
                    <a href="#">MENU</a>
                    <a href="#">RESERVAS</a>
                    <a href="#">PEDIDOS</a>
                    <a href="#">ENTRAR</a>
                  </StyledNav>
                </Navbar.Collapse>
              </Navbar>
            </StyledNav>
          </Col>
        </Row>
      </Container>
    </HeaderContainer>
  );
};
