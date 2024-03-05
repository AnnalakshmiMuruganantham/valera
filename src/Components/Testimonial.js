import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import testimonial1 from "../Assests/Images/testimonials-1.jpg";
import testimonial2 from "../Assests/Images/testimonials-2.jpg";
import testimonial3 from "../Assests/Images/testimonials-3.jpg";
import testimonial4 from "../Assests/Images/testimonials-4.jpg";
import testimonial5 from "../Assests/Images/testimonials-5.jpg";


class Testimonial extends React.Component {
    render(){
        return(
            <div id="Testimonial mt-5">
                <h2 className="Testimonial-h2 mt-5 text-center">Testimonial</h2>
                <Row>
                    <Container>
                        <p className="mt-3 text-center">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        <Carousel>
<Carousel.Item>
  <img src={testimonial1} className="testimonial-img"/>

    <Carousel.Caption>
    <p><i class="fa-solid fa-quote-left" style={{color: '#ff8040', marginRight:'5px', fontSize:'25px'}}></i>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.<i class="fa-solid fa-quote-right" style={{color: '#ff8040', marginLeft:'5px', fontSize:'25px'}}></i></p>
    </Carousel.Caption>
    <h3>Saul Goodman</h3>
      <h4>Ceo & Founder</h4>
  </Carousel.Item>
  <Carousel.Item>
  <img src={testimonial2} className="testimonial-img"/>

    <Carousel.Caption>
    <p><i class="fa-solid fa-quote-left" style={{color: '#ff8040', marginRight:'5px', fontSize:'25px'}}></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i class="fa-solid fa-quote-right" style={{color: '#ff8040', marginLeft:'5px', fontSize:'25px'}}></i></p>
    </Carousel.Caption>
    <h3>Sara Wilsson</h3>
      <h4>Designer</h4>
  </Carousel.Item>
  <Carousel.Item>
  <img src={testimonial3} className="testimonial-img"/>

    <Carousel.Caption>
    <p><i class="fa-solid fa-quote-left" style={{color: '#ff8040', marginRight:'5px', fontSize:'25px'}}></i>                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.<i class="fa-solid fa-quote-right" style={{color: '#ff8040', marginLeft:'5px', fontSize:'25px'}}></i></p>
    </Carousel.Caption>
    <h3>Jena Karlis</h3>
      <h4>Store Owner</h4>
  </Carousel.Item>
  <Carousel.Item>
  <img src={testimonial4} className="testimonial-img"/>

    <Carousel.Caption>
    <p><i class="fa-solid fa-quote-left" style={{color: '#ff8040', marginRight:'5px', fontSize:'25px'}}></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i class="fa-solid fa-quote-right" style={{color: '#ff8040', marginLeft:'5px', fontSize:'25px'}}></i></p>
    </Carousel.Caption>
    <h3>John Larson</h3>
      <h4>Entrepreneur</h4>
  </Carousel.Item>
  <Carousel.Item>
  <img src={testimonial5} className="testimonial-img"/>

    <Carousel.Caption>
    <p><i class="fa-solid fa-quote-left" style={{color: '#ff8040', marginRight:'5px', fontSize:'25px'}}></i>                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.<i class="fa-solid fa-quote-right" style={{color: '#ff8040', marginLeft:'5px', fontSize:'25px'}}></i></p>
    </Carousel.Caption>
    <h3>Matt Brandon</h3>
      <h4>Freelancer</h4>
  </Carousel.Item>
</Carousel>
                    </Container>
                </Row>
            </div>
        );
    }
}
export default Testimonial;