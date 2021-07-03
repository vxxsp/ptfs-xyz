import { Component } from 'react';
import { Button, Col, Container } from 'react-bootstrap';

const NoMatch = () => {
  return (
    <Container>
      <Col>
        <h1>404</h1>
        <p>Page not found.</p>
        <Button variant="dark">
          <a href="/" style={{ color: 'white' }}>
            Home
          </a>
        </Button>{' '}
        <Button variant="dark">
          <a href="/charts" style={{ color: 'white' }}>
            Charts
          </a>
        </Button>
      </Col>
    </Container>
  );
};

export default NoMatch;
