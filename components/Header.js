import {Navbar, Nav, NavDropdown, Container, FormControl, Button} from 'react-bootstrap';

export default function Header({ title }) {
  return (
      <Navbar bg="light" expand="lg">
          <Container>
              <Navbar.Brand href="#home">Israel Brach's Resume & Portfolio</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/resume">Resume</Nav.Link>
                      <NavDropdown title="Major Projects" id="basic-nav-dropdown">
                          <NavDropdown.Item href="https://github.com/srulybrach/GoodBM">Refactored Benchmarking</NavDropdown.Item>
                          <NavDropdown.Item href="https://github.com/srulybrach/Sports-Journalism-Website">Sports Journalism Website</NavDropdown.Item>
                          <NavDropdown.Item href="https://github.com/srulybrach/Israel-Brach-Resume-Portfolio">This Website</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="https://github.com/srulybrach">Github</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  )
}
