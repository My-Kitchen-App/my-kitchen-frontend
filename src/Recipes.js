import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';





//function that takes input from user to search for recipies

// input = text only (provide example placeholder)
// submit button 


class Recipes extends React.Component {


  handleIngredientSubmit = (e) => {
    e.preventDefault();
    //takes in text entry
  };

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicIngredient">
          <Form.Label>Input Your Ingredients!</Form.Label>
          <Form.Control type="ingredient" placeholder="Chicken" />
          <Form.Text className="text-muted">
            What do you have in your kitchen?
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Recipes;
