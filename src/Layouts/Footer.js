import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Footer extends React.Component {
    render(){
        return(
            <div id="footer">
                    <Container>
                    <div className="Footer-main text-center mt-5">
                        <h3>Valera</h3>
                        <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="Enter Your Email" className="footer-email" />
        <Button className="footer-btn">Send Message</Button>{' '}
      </Form.Group>
      </Form>
      <div class="footer-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
                    </div>
                    <div className="footer-bottom">
                        <span className="footer-bottom-left"> © Copyright Valera. All Rights Reserved </span>
                        <span className="footer-bottom-right"> Designed by <span style={{color:'#ff7f5d', cursor:'pointer'}}> Annalakshmi N M</span></span>
                    </div>
                    </Container>
                    
     </div>
   
            
            
        );
    }
}
export default Footer;