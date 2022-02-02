import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import { Nav, Container } from 'react-bootstrap';


class Instructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructions: {},
    };
  }
  getInstructions = async (url) => {
    let instructionsResults = await axios.get(url);
    let resultsData = instructionsResults.data[0]
    //console.log(resultsData)
    this.setState({
      instructions: resultsData
    });
  };

  handleIngredientSubmit = async () => {
    let url = `http://localhost:3001/analyzedInstructions?recipeid=640352`
    this.getInstructions(url);
  };


  render() {
    console.log(this.state.instructions.steps)
    return (
      <>
        <Button onClick={this.handleIngredientSubmit}>Get Instructions</Button>
        {
          this.state.instructions.length > 0 ? (
            this.state.instructions.steps.map((step, index) => (
              <Card key={index}>
                <Card.Body>
                  <Card.Title>{step.number}</Card.Title>
                  <Card.Text>
                    {step.step}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <h3>No instructions found!</h3>
          )
        }


      <Container>
        <Button variant="info"><Nav.Link href="/savedRecipes">To Saved Recipes</Nav.Link></Button>
        <Button variant="info"><Nav.Link href="/">Back to home</Nav.Link></Button>
      </Container>
      </>

      
    )
  }
}

export default Instructions;
