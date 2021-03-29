import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Charts } from './Charts';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
          <Container>
            <Navbar.Brand href="/"><img
              src="/ptfs_logo_nav.png"
              alt="PTFS Logo"
            /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="mr-sm-2">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/charts">Charts</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
        <Charts />
      </div>
    )
  }
};

export default App;
