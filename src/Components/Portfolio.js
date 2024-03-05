import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import portfolio1 from "../Assests/Images/portfolio-1.jpg";
import portfolio2 from "../Assests/Images/portfolio-2.jpg";
import portfolio3 from "../Assests/Images/portfolio-3.jpg";
import portfolio4 from "../Assests/Images/portfolio-4.jpg";
import portfolio5 from "../Assests/Images/portfolio-5.jpg";
import portfolio6 from "../Assests/Images/portfolio-6.jpg";
import portfolio7 from "../Assests/Images/portfolio-7.jpg";
import portfolio8 from "../Assests/Images/portfolio-8.jpg";
import portfolio9 from "../Assests/Images/portfolio-9.jpg";

class Portfolio extends React.Component {
    render(){
        return(
            <div id="Portfolio">
                <h2 className="Portfolio-h2 mt-5 text-center">Portfolio</h2>
                <Container>
                    <p className="text-center mt-3">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    <Row>
                        <Col>
                            <ul className="pricing-ul">
                                <li className="pricing-li">ALL</li>
                                <li className="pricing-li">APP</li>
                                <li className="pricing-li">CARD</li>
                                <li className="pricing-li">WEB</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                    <div className="portfolio-r1">
                   
                        <img src={portfolio1} alt="portfolio" className="portfolio1"/>
                        <div className="portfolio-info1">
                            <h4 className="portfolio-h4">App 1</h4>
                            <p className="portfolio-p">App</p>
                            <i class="fa-solid fa-plus portfolio-i1"></i>
                            <i class="fa-solid fa-link portfolio-i1-2"></i>
                        </div>
                       
                       
                        <img src={portfolio2} alt="portfolio" className="portfolio2"/>
                        <div className="portfolio-info2">
                            <h4 className="portfolio-h4">Web 3</h4>
                            <p className="portfolio-p">Web</p>
                            <i class="fa-solid fa-plus portfolio-i1"></i>
                            <i class="fa-solid fa-link portfolio-i1-2"></i>
                        </div>
                       
                       
                        <img src={portfolio3} alt="portfolio" className="portfolio3"/>
                        <div className="portfolio-info3">
                            <h4 className="portfolio-h4">APP 2</h4>
                            <p className="portfolio-p">APP</p>
                            <i class="fa-solid fa-plus portfolio-i1"></i>
                            <i class="fa-solid fa-link portfolio-i1-2"></i>
                        </div>
                       
                    </div>
                    <div className="portfolio-r2">
                   
                    <img src={portfolio4} alt="portfolio" className="portfolio4"/>
                        <div className="portfolio-info4">
                            <h4 className="portfolio-h4">CARD 2</h4>
                            <p className="portfolio-p">CARD</p>
                            <i class="fa-solid fa-plus portfolio-i1"></i>
                            <i class="fa-solid fa-link portfolio-i1-2"></i>
                        </div>
                   
                   
                    <img src={portfolio5} alt="portfolio" className="portfolio5"/>
                        <div className="portfolio-info5">
                            <h4 className="portfolio-h4">Web 2</h4>
                            <p className="portfolio-p">Web</p>
                            <i class="fa-solid fa-plus portfolio-i1"></i>
                            <i class="fa-solid fa-link portfolio-i1-2"></i>
                        </div>
                   
                   
                    <img src={portfolio6} alt="portfolio" className="portfolio6"/>
                        <div className="portfolio-info6">
                            <h4 className="portfolio-h4">APP 3</h4>
                            <p className="portfolio-p">APP</p>
                            <i class="fa-solid fa-plus portfolio-i1"></i>
                            <i class="fa-solid fa-link portfolio-i1-2"></i>
                        </div>
                    
                   
                        
                    </div>
                    <div className="portfolio-r3">
                   
                    <img src={portfolio7} alt="portfolio" className="portfolio7"/>
                        <div className="portfolio-info7">
                            <h4 className="portfolio-h4">CARD 1</h4>
                            <p className="portfolio-p">CARD</p>
                            <i class="fa-solid fa-plus portfolio-i1"></i>
                            <i class="fa-solid fa-link portfolio-i1-2"></i>
                        </div>
                   
                   
                    <img src={portfolio8} alt="portfolio" className="portfolio8"/>
                        <div className="portfolio-info8">
                            <h4 className="portfolio-h4">CARD 3</h4>
                            <p className="portfolio-p">CARD</p>
                            <i class="fa-solid fa-plus portfolio-i1"></i>
                            <i class="fa-solid fa-link portfolio-i1-2"></i>
                        </div>
                   
                   
                    <img src={portfolio9} alt="portfolio" className="portfolio9"/>
                        <div className="portfolio-info9">
                            <h4 className="portfolio-h4">Web 3</h4>
                            <p className="portfolio-p">Web</p>
                            <i class="fa-solid fa-plus portfolio-i1"></i>
                            <i class="fa-solid fa-link portfolio-i1-2"></i>
                        </div>
                    
                   
                    </div>
                        
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Portfolio;