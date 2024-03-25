// o componente que faz o looping das ofertas especiais provenientes de uma fonte de dados

import React from "react";
import styled from "styled-components";
import { CardsMenu } from "../cards-menu/CardsMenu";
import { Button, Row, Col } from "react-bootstrap";

// const SpecialContainer = styled.specials``;

export const Specials = () => {
  return (
    // <SpecialContainer>
      <section >
        <div className="menu-section">
        <Row className="align-items-center">
          <Col xs={8}>
            <h3>PRATOS ESPECIAIS DA SEMANA!</h3>
          </Col>
        </Row>
        <Button className="button-menu-online" variant="warning">
          Menu Online
        </Button>
        </div>

        <article className="card-menu">
          <CardsMenu />
        </article>
      </section>
    // </SpecialContainer>
  );
};
