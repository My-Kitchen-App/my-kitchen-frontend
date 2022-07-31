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

          <h2 className='about-us-header'>About The Developers</h2>


          <Row xs={1} md={2} className="g-4">
            <Col >
              <ReactCardFlip isFlipped={this.state.showHambalieu} flipDirection="vertical">
                <Card border="dark">
                  <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/72369411?v=4" />
                  <Card.Title style={{ textAlign: 'center' }}>
                    Hambalieu Jallow
                  </Card.Title>
                  <div className='icons'>
                    <a href="https://github.com/Hambalieu"><FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/hambalieu-jallow-a75989226/"><FaLinkedin />
                    </a>
                  </div>

                  <Button variant="outline-secondary" onClick={() => this.setState({ showHambalieu: true })}>Learn about the App Developer</Button>
                </Card>
                <Card border="dark">
                  <Card.Text>
                    My name is Hambalieu Jallow but I go by 'JALLOW'.I am Originally from Gambia. I am currently a Full-Stack Developer utilizing JavaScript,React,CSS,HTML,NodeJS,Express and MongoDb to create fully functional web applications.I am a highly motivated and highly creative engineer that brings a diverse and multilingual perspective to any company culture.Able to work well with others, quick learner, attentive to details, adapt to new work environments quickly, good with multitasking, passionate about the work I do and I do it with a high level of integrity and discretion.
                  </Card.Text>
                  <Button variant="outline-secondary" onClick={() => this.setState({ showHambalieu: false })}>Click to see the Developer</Button>
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


