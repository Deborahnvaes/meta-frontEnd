// o componente que faz o looping das ofertas especiais provenientes de uma fonte de dados

import React from "react";
import styled from "styled-components";
import { Button, Row, Col, Container } from "react-bootstrap";
import SpecialOffers from "../ofertas/SpecialOffers";

const ContainerMenuOnline = styled.section`
  padding: 20px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Specials = () => {
  return (
    <ContainerMenuOnline>
      <Container>
        <Row>
          <Col xs={8}>
            <h3>PRATOS ESPECIAIS DA SEMANA!</h3>
          </Col>

          <Col xs={4}>
            {" "}
            <ButtonContainer>
              <Button className="button-menu-online" variant="warning">
                Menu Online
              </Button>
            </ButtonContainer>
          </Col>
        </Row>
      </Container>

      <SpecialOffers />
    </ContainerMenuOnline>
  );
};
