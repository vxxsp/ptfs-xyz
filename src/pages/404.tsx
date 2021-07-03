import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button, Col, Container } from 'react-bootstrap';
import Link from 'next/link';

const NoMatch = () => {
  return (
    <>
      <Header />
      <Container>
        <Col>
          <h1>404</h1>
          <p>Page not found.</p>
          <Button variant="dark">
            <Link href="/" passHref>
              <a style={{ color: 'white' }}>Home</a>
            </Link>
          </Button>{' '}
          <Button variant="dark">
            <Link href="/charts" passHref>
              <a style={{ color: 'white' }}>Charts</a>
            </Link>
          </Button>
        </Col>
      </Container>
      <Footer />
    </>
  );
};

export default NoMatch;
