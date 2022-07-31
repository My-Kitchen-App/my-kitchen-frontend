import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import './AboutUs.css';


class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      showRae: false,
      showShane: false,
      showKevin: false,
      showHambalieu: false
    };
  }



  handleClick(e) {
    e.preventDefault();
    this.setState({ isFlipped: this.state.isFlipped ? false : true });
  }

  render() {
    return (
      <>
        <Container>

          <h2 className='about-us-header'>About Us</h2>

          
          <Row xs={1} md={2} className="g-4">
            <Col >
              <ReactCardFlip isFlipped={this.state.showHambalieu} flipDirection="vertical">
                <Card border="dark">
                  <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/72369411?v=4" />
                  <Card.Title style={{ textAlign: 'center' }}>
                    MyKicheni
                  </Card.Title>
                  <div className='icons'>
                    <a href="https://github.com/Hambalieu"><FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/hambalieu-jallow-a75989226/"><FaLinkedin />
                    </a>
                  </div>

                  <Button variant="outline-secondary" onClick={() => this.setState({ showHambalieu: true })}>Learn about MyKicheni </Button>
                </Card>
                <Card border="dark">
                  <Card.Text>
                  MyKicheni(is a Swahili name) the home of the vegan, vegetarian and meat lovers food site, accessible and delicious recipes for  . Need something quick and  easy  You’ve landed on the right spot! Need some healthy food advice or tips on putting together a great dinner party? Yup, we’re about to become your new best friends… We are a team who loves everything about food; and when we say everything, we mean everything.
                  </Card.Text>
                  <Button variant="outline-secondary" onClick={() => this.setState({ showHambalieu: false })}>Click to see picture</Button>
                </Card>
              </ReactCardFlip>
           </Col>


          </Row>
        </Container>
      </>

    );
  }
}

export default AboutUs;


