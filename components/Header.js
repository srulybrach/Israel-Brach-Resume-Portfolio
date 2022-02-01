import {Navbar, Nav, NavDropdown, Container, FormControl, Button, Offcanvas, Form} from 'react-bootstrap';

export default function Header({ title }) {
  return (
      <Navbar bg="light" expand={false} id="navbar">
          <Container fluid>
              <Navbar.Brand href="/">Israel Brach's Resume / Portfolio</Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
              >
                  <Offcanvas.Header closeButton>
                      <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                          <Nav.Link href="/">Home</Nav.Link>
                          <Nav.Link href="/resume">Resume</Nav.Link>
                          <NavDropdown title="Projects" id="offcanvasNavbarDropdown">
                              <NavDropdown.Item href="https://github.com/srulybrach/Israel-Brach-Resume-Portfolio">This Website</NavDropdown.Item>
                              <NavDropdown.Item href="https://github.com/srulybrach/GoodBM">Benchmark Application</NavDropdown.Item>
                              <NavDropdown.Item href="https://github.com/srulybrach/Sports-Journalism-Website">Sports Journalism Website</NavDropdown.Item>
                              <NavDropdown.Item href="https://github.com/meirgarfinkel/OsFinalProject">Java MultiThreading Demo</NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="https://github.com/srulybrach">More on my GitHub</NavDropdown.Item>
                          </NavDropdown>
                      </Nav>
                  </Offcanvas.Body>
              </Navbar.Offcanvas>
          </Container>
      </Navbar>
  )
}
