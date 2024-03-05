import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Services extends React.Component {
    render(){
        return(
            <div id="services">
                <h2 className="services-h2 mt-5 text-center">Services</h2>
                <Container>
                <Row className="mt-4">
                    <p className="text-center mb-5">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    <Col xs={12} md={4}>
                        <div className="services-box">
                            <h4><a href="#" className="services-h4">Lorem Ipsum</a></h4>
                            <i class="fa-solid fa-briefcase services-i" style={{color:'#ff689b'}}></i>
                            <p className="services-p">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="services-box">
                            <h4><a href="#" className="services-h4">Dolor Sitema</a></h4>
                            <i class="fa-solid fa-list-check services-i" style={{color:'#e9bf06'}}></i>
                            <p className="services-p">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="services-box">
                            <h4><a href="#" className="services-h4">Sed ut perspiciatis</a></h4>
                            <i class="fa-solid fa-chart-simple services-i" style={{color:'#3fcdc7'}}></i>
                            <p className="services-p">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={12} md={4}>
                        <div className="services-box">
                            <h4><a href="#" className="services-h4">Magni Dolores</a></h4>
                            <i class="fa-solid fa-binoculars services-i" style={{color:'#41cf2e'}}></i>
                            <p className="services-p">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="services-box">
                            <h4><a href="#" className="services-h4">Nemo Enim</a></h4>
                            <i class="fa-regular fa-sun services-i" style={{color:'#d6ff22'}}></i>
                            <p className="services-p">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="services-box">
                            <h4><a href="#" className="services-h4">Eiusmod Tempor</a></h4>
                            <i class="fa-solid fa-calendar-days services-i" style={{color:'#4680ff'}}></i>
                            <p className="services-p">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}
export default Services;