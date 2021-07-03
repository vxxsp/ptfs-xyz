import { Container, Nav, Navbar } from 'react-bootstrap';

const Footer = () => (
  <>
    <br />
    <Navbar bg="dark" variant="dark" className="footer">
      <Container>
        <Navbar.Text>Copyright © 2021. All Rights Reserved.</Navbar.Text>
        <Nav className="mr-sm-2">
          <Nav.Link href="https://discord.com/invite/ptc">
            <img
              src="https://discord.com/assets/07dca80a102d4149e9736d4b162cff6f.ico"
              width="32px"
              alt="Discord"
            />
          </Nav.Link>
          <Nav.Link href="https://twitter.com/Rottenkebab5637">
            <img
              src="https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc7275.png"
              width="32px"
              alt="Twitter"
            />
          </Nav.Link>
          <Nav.Link href="https://www.youtube.com/c/Orange12345/videos">
            <img
              src="https://www.youtube.com/s/desktop/b4335f76/img/favicon_32.png"
              width="32px"
              alt="YouTube"
            />
          </Nav.Link>
          <Nav.Link href="https://www.roblox.com/groups/2794513">
            <img
              src="https://images.rbxcdn.com/23421382939a9f4ae8bbe60dbe2a3e7e.ico.gzip"
              width="32px"
              alt="YouTube"
            />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
);

export default Footer;
