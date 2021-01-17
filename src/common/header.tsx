import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand href="/"><img
            src="/ptfs_logo_nav.png"
            alt="PTFS Logo"
          /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export { Header };
