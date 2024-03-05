import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Contact extends React.Component {
    render(){
        return(
            <div id="Contact">
            <h2 className="Contact-h2 text-center">Contact</h2>
            <Container>
            <p className="mt-3 text-center">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            <div className="contact-map">
            <iframe style={{border:'0', width: '100%', height: '270px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen=""></iframe>
            </div>
            <Row>
                <Col>
                <div>
                <i class="fa-solid fa-location-dot contact-ic" style={{color: '#ff8040'}}></i>
                <h2 className="contact-h2">Location:</h2>
                <p className="contact-p">A108 Adam Street, New York, NY 535022</p>
                </div>
                <div>
                <i class="fa-regular fa-envelope contact-ic" style={{color: '#ff8040'}}></i>
                <h2 className="contact-h2">Email:</h2>
                <p className="contact-p">info@example.com</p>
                </div>
                <div>
                <i class="fa-solid fa-mobile-screen contact-ic" style={{color: '#ff8040'}}></i>
                <h2 className="contact-h2">Call:</h2>
                <p className="contact-p">+1 5589 55488 55s</p>
                </div>
                </Col>
                <Col>
                <Form className="contact-form">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Your Name" className="mt-3" style={{width: '100%', display:'inlineBlock'}}/>
        <Form.Control type="email" placeholder="Your Email" className="mt-3" style={{width: '100%', display:'inlineBlock'}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Control type="text" placeholder="Subject" className="mt-3" style={{width: '100%', display:'inlineBlock'}}/>        
      </Form.Group>
      <Form.Control as="textarea" rows={3} placeholder="Message"/>
      <Button className="contact-btn">Send Message</Button>{' '}
    </Form>
                </Col>
            </Row>
            </Container>
            </div>
        );
    }
}
export default Contact;