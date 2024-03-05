import React from "react";
import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';

class Faq extends React.Component {
    render(){
        return(
            <div id="Faq">
                <h2 className="Faq-h2 text-center">Frequently Asked Questions</h2>
                <Container>
                <p className="mt-3 text-center">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                <Card className="mt-5">
      <Card.Body><i class="fa-regular fa-circle-question faq-ic1" style={{color: '#ff8040'}}></i>Non consectetur a erat nam at lectus urna duis?<i class="fa-solid fa-angle-down faq-ic2" style={{color: '#ff8040'}}></i> </Card.Body>
    </Card>
    <Card className="mt-3">
      <Card.Body><i class="fa-regular fa-circle-question faq-ic1" style={{color: '#ff8040'}}></i>Feugiat scelerisque varius morbi enim nunc?<i class="fa-solid fa-angle-down faq-ic2" style={{color: '#ff8040'}}></i></Card.Body>
    </Card>
    <Card className="mt-3">
      <Card.Body><i class="fa-regular fa-circle-question faq-ic1" style={{color: '#ff8040'}}></i>Dolor sit amet consectetur adipiscing elit? <i class="fa-solid fa-angle-down faq-ic2" style={{color: '#ff8040'}}></i></Card.Body>
    </Card>
    <Card className="mt-3">
      <Card.Body><i class="fa-regular fa-circle-question faq-ic1" style={{color: '#ff8040'}}></i>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?<i class="fa-solid fa-angle-down faq-ic2" style={{color: '#ff8040'}}></i></Card.Body>
    </Card>
    <Card className="mt-3">
      <Card.Body><i class="fa-regular fa-circle-question faq-ic1" style={{color: '#ff8040'}}></i>Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?<i class="fa-solid fa-angle-down faq-ic2" style={{color: '#ff8040'}}></i></Card.Body>
    </Card>
                </Container>
            </div>
        );
    }
}
export default Faq;