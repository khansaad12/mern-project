import { useContext } from "react";
import { Container,Nav,Navbar,Row,Col,Dropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom"
import { productContext } from "../context/context";
function NavFunction({get}){
    const gstate = useContext(productContext);
    const state = gstate.state.length;
    const dispatch = gstate.dispatch;
    console.log(gstate.state);
    function handleChange(e){
        const searching=e.target.value.toLowerCase();
        console.log(searching);
        get(searching); 
    }
    function handleClick1(){
        dispatch({type:'ASCENDING',payload:gstate.state})
        
   }
   function handleClick2(){
    dispatch({type:'DESCENDING',payload:gstate.state})
}
function handleClick3(){
    dispatch({type:'LOWER',payload:gstate.state})
}
    return(
        <header style={{paddingTop:'50px'}}>
        <Container fluid>
        
        <Row>
            <Col>
            
        <Navbar className = 'bg-dark fw-bold' variant="dark" fixed="top">
           <Container >
                <Navbar.Brand >shoping bzar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as ={NavLink} to="/about">about</Nav.Link>
                    <Nav.Link as ={NavLink} to="/Service">service</Nav.Link>
                    <Nav.Link as ={NavLink} to="/Cart">cart {state}</Nav.Link>
                    <input className="rounded-pill p-1" type="text" placeholder="search here" onChange={handleChange}/>
                </Nav>
                <Nav className='ms-auto'>
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={handleClick1}>Ascending order</Dropdown.Item>
                    <Dropdown.Item onClick={handleClick2}>Descending order</Dropdown.Item>
                    <Dropdown.Item onClick={handleClick3}>Lower Price</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> 
            </Nav>
                </Container>
        </Navbar>
       
        </Col>
        </Row>
        
        </Container>
        </header>
    )
}
export default NavFunction;