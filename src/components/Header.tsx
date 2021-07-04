import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

const Header = () => (
  <>
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>
            <img src="/ptfs_wordmark.svg" alt="PTFS Logo" height="30px" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="mr-sm-2">
          <Nav className="mr-auto">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/charts" passHref>
              <Nav.Link>Charts</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br />
  </>
);

export default Header;
