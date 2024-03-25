import React from 'react'
import { Card, CardGroup, Col, Row, Container } from 'react-bootstrap';
import SaladaVerde from '../../assets/imagens/greek salad.jpg'
import TortaLimao from '../../assets/imagens/lemon dessert.jpg'
import Bruchetta from '../../assets/imagens/bruchetta.svg'

export const CardsMenu = () => {
  return (
    <Container>
        <Row className="align-items-center">
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={SaladaVerde} />
        <Card.Body>
          <Card.Title>Salada Verde</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-i.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Peça pelo Delivery</small>
        </Card.Footer>
      </Card>



      <Card>
      <Card.Img variant="top" src={Bruchetta} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Peça pelo Delivery</small>
        </Card.Footer>
      </Card>



      <Card>
      <Card.Img variant="top" src={TortaLimao} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Peça pelo Delivery</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </Row>
    </Container>
  );
}
