import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import team1 from "../Assests/Images/team-1.jpg";
import team2 from "../Assests/Images/team-2.jpg";
import team3 from "../Assests/Images/team-3.jpg";
import team4 from "../Assests/Images/team-4.jpg";

class Team extends React.Component {
    render(){
        return(
            <div id="Team">
                <h2 className="team-h2 text-center">Team</h2>
                <Container>
                <p className="mt-3 text-center">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                <Row>
                <Col xs={12} md={3}>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={team1} />
      <Card.Body className="team-card-body">
        <Card.Title>Walter White</Card.Title>
        <Card.Text className="text-muted">
        Chief Executive Officer
        </Card.Text>
      </Card.Body>
      <div class="team-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
    </Card>
                    
                </Col>
                <Col xs={12} md={3}>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={team2} />
      <Card.Body className="team-card-body">
        <Card.Title>Sarah Jhonson</Card.Title>
        <Card.Text className="text-muted">
        Product Manager
        </Card.Text>
      </Card.Body>
      <div class="team-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
    </Card>
                </Col>
                <Col xs={12} md={3}>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={team3} />
      <Card.Body className="team-card-body">
        <Card.Title>William Anderson</Card.Title>
        <Card.Text className="text-muted">
        CTO
        </Card.Text>
      </Card.Body>
      <div class="team-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
    </Card>
                </Col>
                <Col xs={12} md={3}>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={team4} />
      <Card.Body className="team-card-body">
        <Card.Title>Amanda Jepson</Card.Title>
        <Card.Text className="text-muted">
        Accountant
        </Card.Text>
      </Card.Body>
      <div class="team-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
    </Card>
                </Col>
                </Row>
                </Container>
            </div>
        );
    }
}
export default Team;