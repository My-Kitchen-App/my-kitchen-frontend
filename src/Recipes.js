import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { withAuth0 } from '@auth0/auth0-react';





//function that takes input from user to search for recipes

// input = text only (provide example placeholder)
// submit button 

// let SERVER = process.env.REACT_APP_SERVER;

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }
  getRecipes = async (url) => {
    if (this.props.auth0.isAuthenticated){
      console.log('I am here');
    const responseFromAuth0 = await this.props.auth0.getIdTokenClaims();
    // VERY IMPORTANT.  Double underscore!!!
    const jwt = responseFromAuth0.__raw;
    console.log(jwt);
    }
    // let recipeResults = await axios.get(url);
    // this.setState({
    //   recipes: recipeResults.data
    // });
    // console.log(this.state.recipes);
  };


  handleIngredientSubmit = async (e) => {
    e.preventDefault();
    
    // let ingredients = e.target.formBasicIngredient.value;
    // let url = `http://localhost:3001/recipes?ingredient=${ingredients}`;
    // this.getRecipes(url);
    // console.log('activated');
  };

  componentDidUpdate() {
    console.log('component did mount');
    this.getRecipes();
  }


  render() {
    return (
      <>
        <Form onSubmit={this.handleIngredientSubmit}>
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
        {
          this.state.recipes.length > 0 ? (
            this.state.recipes.map((recipe, index) => (
              <Card key={index}>
                <Card.Img src={recipe.image} />
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <Card.Text>
                    description
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))
          ) : (
            <h3>No recipes found!</h3>
          )
        }
      </>
    );
  }
}

export default withAuth0(Recipes);
