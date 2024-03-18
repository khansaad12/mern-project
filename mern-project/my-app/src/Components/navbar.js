import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaResolving } from "react-icons/fa6";
function BasicExample() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <FaResolving></FaResolving> LaadKompas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" >
            
            <NavDropdown title="Production" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Klantenservice" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
             
            </NavDropdown>
            <NavDropdown title="over ones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              
            </NavDropdown>
            
          </Nav>
          <Button variant='warning' className='rounded-pill'>offer in conversion </Button>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default BasicExample;