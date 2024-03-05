import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import value1 from '../Assests/Images/our-values-1.jpg';
import value2 from '../Assests/Images/our-values-2.jpg';
import value3 from '../Assests/Images/our-values-3.jpg';
import value4 from '../Assests/Images/our-values-4.jpg';
import client1 from '../Assests/Images/client-1.png';
import client2 from '../Assests/Images/client-2.png';
import client3 from '../Assests/Images/client-3.png';
import client4 from '../Assests/Images/client-4.png';

class About extends React.Component {
    render(){
        return(
            <div id="about">
                <h2 className="about-h2 mt-5 text-center">About Us</h2>
                <Container>
                <Row>
                    <Col className="mt-5">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <ul className="about-ul">
                            <li className="about-li"><i class="fa-solid fa-check-double" style={{color: '#ff8000'}}></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                            <li className="about-li"><i class="fa-solid fa-check-double" style={{color: '#ff8000'}}></i>Duis aute irure dolor in reprehenderit in voluptate velit</li>
                            <li className="about-li"><i class="fa-solid fa-check-double" style={{color: '#ff8000'}}></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                        </ul>
                    </Col>
                    <Col className="mt-5">
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        <input type="button" value="Learn More" className="about-right-btn"/>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={12} md={3}>
                        <span className="about-span">232</span>
                        <p>Clients</p>
                    </Col>
                    <Col xs={12} md={3}>
                        <span className="about-span">521</span>
                        <p>Projects</p>
                    </Col>
                    <Col xs={12} md={3}>
                        <span className="about-span">1463</span>
                        <p>Hours Of Support</p>
                    </Col>
                    <Col xs={12} md={3}>
                        <span className="about-span">15</span>
                        <p>Hard Workers</p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={12} md={6}>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={value1} />
                            <div className="card-content">
                                <h4 className="text-center mt-2">Our Mission</h4>
                                <p className="ml-3">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                                <a href="#" className="ml-3"><i class="fa-solid fa-arrow-right mr-2"></i>Read More</a>
                            </div>   
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={value2} />
                        <div className="card-content">
                            <h4 className="text-center mt-2">Our Plan</h4>
                            <p className="ml-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.</p>
                            <a href="#" className="ml-3"><i class="fa-solid fa-arrow-right mr-2"></i>Read More</a>
                        </div>
                    </Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={12} md={6}>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={value3} />
                            <div className="card-content">
                                <h4 className="text-center mt-2">Our Mission</h4>
                                <p className="ml-3">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</p>
                                <a href="#" className="ml-3"><i class="fa-solid fa-arrow-right mr-2"></i>Read More</a>   
                            </div>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={value4} />
                        <div className="card-content">
                            <h4 className="text-center mt-2">Our Care</h4>
                            <p className="ml-3">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem.</p>
                            <a href="#" className="ml-3"><i class="fa-solid fa-arrow-right mr-2"></i>Read More</a>
                        </div>
                    </Card>
                    </Col>
                </Row>
                </Container>
                <Container fluid>
                <Row>
                        <div className="client-companies">
                            <img src={client1} className="client-img"/>
                            <img src={client2} className="client-img"/>
                            <img src={client3} className="client-img"/>
                            <img src={client4} className="client-img"/>
                        </div>
                    </Row>
                </Container>
            </div>        
        );
    }
}
export default About;