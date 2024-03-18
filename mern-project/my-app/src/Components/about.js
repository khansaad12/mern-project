import { Col, Container, ProgressBar, Row } from "react-bootstrap";

function About(){
    let now = 80;
    let js = 100;
    let re = 100;
    return(
        
        <section >
      <Container style={{marginTop:'50px'}}>
        <div className="title-holder text-center">
            <h2 >About us</h2>
           <div className="subtitle">learn more about us</div>
            </div>
            <br/>
            <Row>
                <Col  className="text-center offset-2">
                    <img src="images/about.jpg" alt="error" ></img>
                </Col>
                <Col>
                    <p>We offer comprehensive web design and development services that are tailored to meet the unique needs of your business. Our team of experienced designers and developers work closely with you to create a website that not only looks great but also functions seamlessly. We focus on creating a user-friendly experience for your visitors, ensuring that your website is easy to navigate and optimized for conversions.
                     </p>
                <h4>HTML CSS </h4>
                 <ProgressBar now={now} label = {`${now}%`} animated variant="danger"></ProgressBar>
                 <h4>Advance Java Script  </h4>
                 <ProgressBar now={js} label = {`${js}%`} animated></ProgressBar>        
                 <h4>React </h4>
                 <ProgressBar now={re} label = {`${re}%`} animated variant="success"></ProgressBar>        
                      
                </Col>
            </Row>
            </Container>
        </section>
        
    )
}
export default About;