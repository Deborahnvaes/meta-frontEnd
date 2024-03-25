import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import styled from "styled-components";
import restaurantFood from "../../assets/imagens/restauranfood.jpg";

const HomePageSection = styled.section`
  background-color: #495e57;
  padding: 20px;

  .image-container {
    width: 60%;
    text-align: right;
  }

  .image {
    width: 100%;
    height: auto;
  }

  .content {
    margin-right: 90px;
    padding: 4px;
  }
`;

export const HomePage = () => {
  return (
    <HomePageSection>
      <Container>
        <Row>
          <Col md={8}>
            <div className="content">
              <h1>Little Lemon</h1>
              <p>
                Somos um restaurante mediterrâneo de propriedade familiar,
                focado em receitas tradicionais servidas com um toque moderno.
              </p>
              <Button variant="warning">Reserve sua Mesa</Button>
            </div>
          </Col>
          <Col md={4}>
            <div className="image-container">
              <img className="image" src={restaurantFood} alt="logo-empresa" />
            </div>
          </Col>
        </Row>
      </Container>
    </HomePageSection>
  );
};

export default HomePage