import { Card, Container, Row ,Col,Dropdown ,Button} from "react-bootstrap";
import './back.css';
function Back(){
    return(
        <Container fluid>
            <Row>
                <Col className="article" style={{ backgroundImage: 'url(new1.jpg)',height:'500px' }}>
                    <Row>
                    <Col lg = {4}>
                        <h3 style={{marginTop:'50px',color:'white'}}>De Gratis Universele laadpas geschikt voor iedereen</h3>
                    </Col>
                    <Col lg = {{offset:2}} >
                    <Card style={{width:'70%'}}>
                       <Card.Title style={{color:'green',padding:'15px 0 0 15px',}}>Gratis laadpas voor uv elektrishe auto</Card.Title>
                        <Card.Body>
                            <Card.Text>✅ 10000 plus subscriber</Card.Text>
                            <Card.Text>✅ 10000 plus views</Card.Text>
                            <Card.Text>✅ 10000 plus Likes</Card.Text>
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                 Dropdown1
                             </Dropdown.Toggle>
                             <Dropdown.Toggle style={{marginLeft:'15px'}} variant="light" id="dropdown-basic">
                                 Dropdown2
                             </Dropdown.Toggle>
                             </Dropdown>
                             <br></br>
                             <div className="d-grid">
                             <Button variant='warning'  className='rounded-pill' >offer in conversion </Button>
                             </div>
                             <br></br>
                             <Card.Text style={{textAlign:'center'}}>It is a long established fact</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default Back; 