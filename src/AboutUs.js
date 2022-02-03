import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import { FaGithub,  FaLinkedin } from 'react-icons/fa';



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
          <h2>About Us</h2>
          <Row xs={1} md={2} className="g-6">
            <Col>
              <ReactCardFlip isFlipped={this.state.showHambalieu} flipDirection="vertical">
                <Card border="dark" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/72369411?v=4" />
                  <Button onClick={() => this.setState({ showHambalieu: true })}>Click about the App Developer</Button>
                  <Card.Title>
                    Hambalieu Jallow
                  </Card.Title>
                  <div >
                    <a href='https://github.com/Hambalieu'>
                      <FaGithub/>
                    </a>
                    <a href='https://www.linkedin.com/in/hambalieu-jallow-a75989226/'>
                      <FaLinkedin/>
                    </a>
                  </div>
                </Card>
                <Card border="dark" style={{ width: '18rem' }}>
                  <Card.Text>
                    My name is Hambalieu Jallow but I go by 'JALLOW'.I am Originally from Gambia but I have been Living in Seattle for past 6 years. I am currently a Full-Stack Developer utilizing JavaScript,React,CSS,HTML,NodeJS,Express and MongoDb to create fully functional web applications.I am a highly motivated and highly creative engineer that brings a diverse and multilingual perspective to any company culture.Able to work well with others, quick learner, attentive to details, adapt to new work environments quickly, good with multitasking, passionate about the work I do and I do it with a high level of integrity and discretion.
                  </Card.Text>
                  <Button onClick={() => this.setState({ showHambalieu: false })}>Click to see the Developer</Button>
                  <h3> <FaGithub /> </h3>

                </Card>
              </ReactCardFlip>
            </Col>

            <Col>
              <ReactCardFlip isFlipped={this.state.showRae} flipDirection="vertical">
                <Card border="dark" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/94281145?v=4" />
                  <Button onClick={() => this.setState({ showRae: true })}>Click about the App Developer</Button>
                  <Card.Title>
                    Regan Hayes
                  </Card.Title>
                  <div >
                    <a href='https://github.com/raechanel'>
                      <FaGithub/>
                    </a>
                    <a href='https://www.linkedin.com/in/reganhayes/'>
                      <FaLinkedin/>
                    </a>
                  </div>
                </Card>
                <Card border="dark" style={{ width: '18rem' }}>
                  <Card.Text>
                    Hello, my name is Regan Hayes. I am a Software Developer from Virginia. I am prior Air Force and that experience has taught me the importance of a team and paying attention to the details. I love problem solving and taking on new challenges. I am always looking for ways to improve myself. I've been interested in pursuing a career in technology since junior high but I discovered my passion for Software Engineering recently through an app called “mimo”.  What I enjoy most about software engineering is the creation process: being able to build something from nothing. I am excited to be on this journey of constantly learning and meeting new people.
                  </Card.Text>
                  <Button onClick={() => this.setState({ showRae: false })}>Click to see the Developer</Button>
                </Card>
              </ReactCardFlip>
            </Col>

            <Col>
              <ReactCardFlip isFlipped={this.state.showKevin} flipDirection="vertical">
                <Card border="dark" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/88298415?v=4" />

                  <Button onClick={() => this.setState({ showKevin: true })}>Click about the App Developer</Button>
                  <Card.Title>
                    Kevin LaMarca
                  </Card.Title>
                  <div >
                    <a href='https://github.com/KevLaMDev'>
                      <FaGithub/>
                    </a>
                    <a href='https://www.linkedin.com/in/kevin-lamarca/'>
                      <FaLinkedin/>
                    </a>
                  </div>
                </Card>
                <Card border="dark" style={{ width: '18rem' }}>
                  <Card.Text>
                    Hello, my name is Kevin LaMarca and I am a software engineer. I graduated from Baruch College with a degree in corporate communication, an amalgam of marketing, public relations and workplace communication. I worked briefly as a English foreign language teacher and then pivoted into software engineering as I enjoyed the mentorship of teaching, but longed to continue learning as a student myself. What I enjoy most in Software Engineering is the process of continual learning and collaborating to build cool things. In addition to English, I am also fluent in Italian and speak French and Spanish conversationally, allowing me to work well in international environments.
                  </Card.Text>
                  <Button onClick={() => this.setState({ showKevin: false })}>Click to see the Developer</Button>
                </Card>
              </ReactCardFlip>
            </Col>

            <Col>
              <ReactCardFlip isFlipped={this.state.showShane} flipDirection="vertical">
                <Card border="dark" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/82549979?v=4" />
                  <Button onClick={() => this.setState({ showShane: true })}>Click about the App Developer</Button>
                  <Card.Title>
                    Shane Roach
                  </Card.Title>
                  <div >
                    <a href='https://github.com/Shane-Patrick-Roach'>
                      <FaGithub/>
                    </a>
                    <a href='https://www.linkedin.com/in/shane-roach-908987226/'>
                      <FaLinkedin/>
                    </a>
                  </div>
                </Card>
                <Card border="dark" style={{ width: '18rem' }}>
                  <Card.Text>
                    I am currently studying to become a software developer. I come from a mixed background of engineering, art, and design; which have ultimately shaped how I view the world. Over the past couple years, since I graduated from University. I have been studying art and design specifically aimed towards the entertainment industry, while also working at a climbing gym as a routesetter. Both of these roles have helped me develop my ability to create engaging, immersive, social experiences for people. An example of this would be designing climbing routes for every experience level with the aim of driving individual skill development. Creating these types of experiences for people is ultimately what I aim to do. I want to work at a company that uses software to create augmented and virtual realities that help everyone to gain inspiration, connection, and learn together.
                  </Card.Text>
                  <Button onClick={() => this.setState({ showShane: false })}>Click to see the Developer</Button>
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


