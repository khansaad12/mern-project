import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Example() {
  return (
    <Navbar expand="lg"  className="bg-success" variant='dark'>
      <Container>
        <Navbar.Brand href="#home">Thuis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Zakilijk</Nav.Link>
            <Nav.Link href="#link">Groothandel</Nav.Link>
            
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#home">webshop</Nav.Link>
            <NavDropdown title="inloggen" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Example;