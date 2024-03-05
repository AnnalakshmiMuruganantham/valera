import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Pricing extends React.Component {
    render(){
        return(
            <div id="Pricing">
                <h2 className="Pricing-h2 text-center">Pricing</h2>
                <Container>
                <p className="mt-3 text-center">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                <Row>
                <Col xs={12} md={3}>
                <div class="card border-secondary  mb-3 mt-3" style={{maxWidth: '100%'}}>
              <div class="card-header bg-light border-secondary text-center">Free</div>
              <div class="card-body text-secondary">
                <h3><span style={{color:'#ff7f5d'}}>$0</span><span class="text-muted" style={{fontSize:'15px'}}> / month</span></h3>
                <ul style={{listStyle:'none'}}>
                  <li class="pb-2 mt-3">Aida dere</li>
                  <li class="pb-2">Nec feugiat nisl</li>
                  <li class="pb-2">Nulla at volutpat dola</li>
                  <li class="pb-2"><s>Pharetra massa</s></li>
                  <li class="pb-2"><s>Massa ultricies mi</s></li>
                </ul>
              </div>
              <div className="card-footer text-center bg-light border-secondary"><a href=""><button type="button" className="btn text-white pricing-btn">Buy Now</button>
              </a></div>
            </div>
                </Col>
                <Col xs={12} md={3}>
                <div class="card border-secondary mb-3 mt-3" style={{maxWidth: '100%'}}>
              <div class="card-header card-header-active border-secondary text-center text-white">Business</div>
              <div class="card-body text-secondary">
                <h3><span style={{color:'#ff7f5d'}}>$19</span><span class="text-muted" style={{fontSize:'15px'}}>/ month</span> </h3>
                <ul style={{listStyle:'none'}}>
                  <li class="pb-2 mt-3">Aida dere</li>
                  <li class="pb-2">Nec feugiat nisl</li>
                  <li class="pb-2">Nulla at volutpat dola</li>
                  <li class="pb-2"><s>Pharetra massa</s></li>
                  <li class="pb-2"><s>Massa ultricies mi</s></li>
                </ul>
              </div>
              <div class="card-footer text-center bg-light border-secondary"><a href=""><button type="button" class="btn text-white pricing-btn">Buy Now</button>
              </a></div>
            </div>
                </Col>
                <Col xs={12} md={3}>
                <div class="card border-secondary mb-3 mt-3" style={{maxWidth: '100%;'}}>
              <div class="card-header bg-light text-center border-secondary">Developer</div>
              <div class="card-body text-secondary">
                <h3><span style={{color:'#ff7f5d'}}>$29</span><span class="text-muted" style={{fontSize:'15px'}}>/ month</span> </h3>
                <ul style={{listStyle:'none'}}>
                  <li class="pb-2 mt-3">Aida dere</li>
                  <li class="pb-2">Nec feugiat nisl</li>
                  <li class="pb-2">Nulla at volutpat dola</li>
                  <li class="pb-2"><s>Pharetra massa</s></li>
                  <li class="pb-2"><s>Massa ultricies mi</s></li>
                </ul>
              </div>
              <div class="card-footer bg-light text-center border-secondary"><a href=""><button type="button" class="btn text-white pricing-btn">Buy Now</button>
              </a></div>
            </div>
                </Col>
                <Col xs={12} md={3}>
                <div class="card border-secondary mb-3 mt-3" style={{maxWidth: '100%;'}}>
              <div class="card-header bg-light text-center border-secondary">Ultimate</div>
              <div class="card-body text-secondary">
                <h3><span style={{color:'#ff7f5d'}}>$49</span>
                  <span class="text-muted" style={{fontSize:'15px'}}>/ month</span> 
                </h3>
                <ul style={{listStyle:'none'}}>
                  <li class="pb-2 mt-3">Aida dere</li>
                  <li class="pb-2">Nec feugiat nisl</li>
                  <li class="pb-2">Nulla at volutpat dola</li>
                  <li class="pb-2"><s>Pharetra massa</s></li>
                  <li class="pb-2"><s>Massa ultricies mi</s></li>
                </ul>
              </div>
              <div class="card-footer bg-light text-center border-secondary"><a href=""><button type="button" class="btn text-white pricing-btn">Buy Now</button>
              </a></div>
            </div>
                </Col>

                </Row>
                </Container>
            </div>
        );
    }
}
export default Pricing;