import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Container, Col } from "react-bootstrap";
import styled from "styled-components";

const OfertasEspeciaisContainer = styled.div`
  padding: 20px;
`;

const StyledCard = styled(Card)`
  margin-bottom: 50px;
`;

const CustomCardTitle = styled(Card.Title)`
  font-size: 18px;
  margin-right: 10px;
`;

const CustomCardBody = styled(Card.Body)`
  padding: 10px;
  display: flex;
  align-items: center;
  width: 100%;
`;

const CustomCardText = styled(Card.Text)`
  font-size: 15px;
`;

const CustomCardFooter = styled(Card.Footer)`
  background-color: #f8f9fa;
`;

const CustomCardImg = styled(Card.Img)`
  height: 200px; /* Ajuste a altura conforme necessário */
  object-fit: cover;
`;

const SpecialOffers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        setOffers(response.data.meals);
      } catch (error) {
        console.error("Erro ao buscar ofertas", error);
      }
    };
    fetchOffers();
  }, []);

  return (
    <OfertasEspeciaisContainer>
      <Container>
        <Row>
          {offers.slice(0, 3).map((offer, index) => (
            <Col xs={12} md={4} key={index}>
              <StyledCard>
                <CustomCardImg
                  variant="top"
                  src={offer.strMealThumb}
                  alt={offer.strMeal}
                />
                <CustomCardBody>
                  <div>
                    <CustomCardTitle>{offer.strMeal}</CustomCardTitle>
                    <CustomCardText>Preço: R$9.99</CustomCardText>
                  </div>
                </CustomCardBody>
                <CustomCardFooter>
                  <small>Peça pelo delivery!</small>
                </CustomCardFooter>
              </StyledCard>
            </Col>
          ))}
        </Row>
      </Container>
    </OfertasEspeciaisContainer>
  );
};

export default SpecialOffers;
