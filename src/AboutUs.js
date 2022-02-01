import React from 'react';
import { Container } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';





class AboutUs extends React.Component {


  render() {
    return (
      <>

        <Container>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="https://avatars.githubusercontent.com/u/72369411?v=4"
              rounded={true}
            />
            <Figure.Caption>
              Jallow
            </Figure.Caption>
          </Figure>
        </Container>

        <Container>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="https://avatars.githubusercontent.com/u/94281145?v=4"
              rounded={true}
            />
            <Figure.Caption>
              Regan
            </Figure.Caption>
          </Figure>
        </Container>

        <Container>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="https://avatars.githubusercontent.com/u/88298415?v=4"
              rounded={true}
            />
            <Figure.Caption>
              Kevin 
            </Figure.Caption>
          </Figure>
        </Container>

        <Container>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="https://avatars.githubusercontent.com/u/82549979?v=4"
              rounded={true}
            />
            <Figure.Caption>
              Shane
            </Figure.Caption>
          </Figure>
        </Container>
      </>
    );
  }
}

export default AboutUs;
