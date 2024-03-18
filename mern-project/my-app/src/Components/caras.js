import { Carousel, Container,Row,Col, Navbar, Nav, Button, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './caras.css';
function Carousal(){
    return(
        <>
        <Container fluid>
            <Row>
                <Col>
                    <Navbar className = 'bg-dark fw-bold ' variant="dark" expand = 'md' fixed="top">
                        <Container fluid>
                            <Navbar.Brand href="#">shoping &nbsp;
                                
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="my-id"></Navbar.Toggle>
                            <Navbar.Collapse id="my-id">
                            <Nav className = 'me-auto'>
                               
                                <Nav.Link className="hovering">Home</Nav.Link>
                                <Nav.Link className="hovering">Contact</Nav.Link>
                                <NavDropdown className="hovering" title="Services" id="my-id">
                                    <NavDropdown.Item className="hovering">service 1</NavDropdown.Item>
                                    <NavDropdown.Divider></NavDropdown.Divider>
                                    <NavDropdown.Item className="hovering">service 2</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link className="hovering">About</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                            <Navbar.Text>sign in here &nbsp;&nbsp;</Navbar.Text>
                            <Button variant="outline-success" >Login</Button>
                            
                        </Container>
                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col>
            
             
                    <Carousel variant ='dark' fade>
                        <Carousel.Item interval={500}>
                         <img src="images/re1.jpg" width='100%' alt="error"></img>
                         <Carousel.Caption><h1>This is First image</h1></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                         <img src="images/re2.jpg" width='100%'  alt="error"></img>
                         <Carousel.Caption className="fw-bold" ><h1>This is 2nd image</h1></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img src="images/re3.jpg" width='100%'  alt="error"></img>
                            <Carousel.Caption className="fw-bold" ><h1>This is third image</h1></Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </Col>
        </Row>
            <Row>
                <Col>
                    <p></p>
</Col>
 </Row>               
            </Container>          
      
        </>
    )
}
 export default Carousal;