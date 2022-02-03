import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import RenderModalButton from './RenderModalButton';
import RecipeModal from './RecipeModal';
import Container from 'react-bootstrap/Container';

import { withAuth0 } from '@auth0/auth0-react';


// let SERVER = process.env.REACT_APP_SERVER;

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      show: false,
      saved: false
    };
  }
  getRecipes = async (url) => {
    let recipeResults = await axios.get(url);
    this.setState({
      recipes: recipeResults.data
    });
  };

  postRecipe = async (savedRecipe) => {
    try {
      let url = `http://localhost:3001/recipe`;
      await axios.post(url, savedRecipe);
    } catch (err) {
      console.error(err)
    }
  }

  getInstructions = async (id) => {
    let url = `http://localhost:3001/analyzedInstructions?recipeid=${id}`
    let instructionsResults = await axios.get(url);
    this.setState ({
      instructions: instructionsResults.data
    });
    console.log(this.state.instructions);
  };

  
  
  handleGetInstructions = (recipeObj) => {
    let id = recipeObj.apiId; 
    console.log(id);
    this.getInstructions(id);
  }


  handleIngredientSubmit = async (e) => {
    e.preventDefault();
    let ingredients = e.target.formBasicIngredient.value;
    let url = `http://localhost:3001/recipes?ingredient=${ingredients}`;
    this.getRecipes(url);
  };

  handlePost = (recipeObj) => {
    let savedRecipe = recipeObj;
    savedRecipe.email = this.props.auth0.user.email;
    console.log(savedRecipe);
    this.postRecipe(savedRecipe);
    this.setState({
      saved: true
    })
  }


  handleShowModal = (recipe) => {
    this.setState({
      show: true,
      currentRecipe: recipe
    })
  };


  handleCloseModal = () => {
    this.setState({
      show: false,
    })
  };

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
        {this.state.show &&
          <RecipeModal
            handleCloseModal={this.handleCloseModal}
            handleShowModal={this.handleShowModal}
            show={this.state.show}
            recipeImg={this.state.currentRecipe.image}
            title={this.state.currentRecipe.title}
            missedIngredients={this.state.currentRecipe.missedIngredients}
            recipeObj={this.state.currentRecipe}
            handlePost={this.handlePost}
            saved={this.state.saved}
            handleGetInstructions={this.handleGetInstructions}
          />}
        {
          this.state.recipes.length > 0 ? (
            this.state.recipes.map((recipe, index) => (
              <Container>
                <Card key={index}>
                  <Card.Img src={recipe.image} />
                  <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <RenderModalButton handleShowModal={this.handleShowModal} recipe={recipe} />
                  </Card.Body>
                </Card>
              </Container>
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
