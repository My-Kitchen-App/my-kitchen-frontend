import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import RenderModalButton from './RenderModalButton';
import RecipeModal from './RecipeModal';
import Container from 'react-bootstrap/Container';
import { Accordion } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

import './Recipes.css';

import crabImage from './images/crab-cakes.jpeg';
import shakeImage from './images/shake.jpeg';
import sushiImage from './images/sushi.jpeg';
import chickenImage from './images/chicken.jpeg';
import riceImage from './images/rice.jpeg';
import pokeImage from './images/poke.jpeg';

import { withAuth0 } from '@auth0/auth0-react';
import { Stack } from 'react-bootstrap';


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
    this.setState({
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
        <div>
          <Form className="mb-3" onSubmit={this.handleIngredientSubmit}>
            <Form.Group controlId="formBasicIngredient">
              <Form.Label>Find A Recipe</Form.Label>
              <Stack direction="horizontal" gap={2}>
                <Form.Control type="ingredient" placeholder="🔎           Search by Ingredients" size="lg" />
              </Stack>
            </Form.Group>
            <div className='search-button'>
              <Button style={{ margin: 'auto' }} variant="secondary" type="submit">Search</Button>
            </div>
          </Form>
        </div>
        {
          this.state.show &&
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
          />
        }
        {
          this.state.recipes.length > 0 ? (
            <Container>
              <Row xs={2} md={3} className="recipes">
                {this.state.recipes.map((recipe, index) => (
                  <Col>
                    <Card key={index}>
                      <Card.Img src={recipe.image} />
                      <Card.Body>
                        <Card.Title>{recipe.title}</Card.Title>
                        <RenderModalButton handleShowModal={this.handleShowModal} recipe={recipe} />
                      </Card.Body>
                    </Card>
                  </Col>
          ))}
          </Row>
        </Container>
        ) : (
        <Container>
          <strong className='intro'>Do you want to have dinner on the table and don't know what you have the ingredients for?</strong> <br /> <strong className='intro-2'> Input some ingredients that you have in your kitchen and let us do the searching</strong>
          <h2 className='title'>Our Favorites</h2>
          <Row xs={2} md={3} className="g-6">
            <Col>
              <Card style={{ width: '18rem' }} className='card'>
                <Card.Img src={crabImage} />
                <Card.Body>
                  <Card.Title>Broiled Crab Cakes</Card.Title>
                  <Card.Text>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Ingredients</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>1 pound fresh (not canned) crabmeat</li>
                            <li>10 saltine crackers, crushed</li>
                            <li>2 tablespoons minced fresh Italian parsley</li>
                            <li>2 tablespoons finely minced peppedew or pimiento peppers</li>
                            <li>4 tablespoons mayonnaise</li>
                            <li>1/4 teaspoon Old Bay seasoning</li>
                            <li>2 teaspoons very soft butter</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Instructions</Accordion.Header>
                        <Accordion.Body>
                          <ol>
                            <li>Place all of the ingredients, except the butter, in a large bowl. With a fork, very gently toss the ingredients together until just blended being careful to avoid breaking up the crabmeat too much.</li>
                            <li>Gently form into 6 slightly rounded cakes and place on a non-stick baking sheet (non-stick aluminum foil works great here). This can be done up to a day in advance and refrigerated, covered, until ready to cook.</li>
                            <li>Preheat broiler on its lowest setting. Gently spread softened butter on each cake and broil until golden brown and hot throughout.</li>
                            <li>Let sit for 5-10 minutes minutes before carefully removing the cakes from the baking sheet with a spatula</li>
                          </ol>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }} className='card'>
                <Card.Img src={shakeImage} />
                <Card.Body>
                  <Card.Title>Homemade Strawberry Shake</Card.Title>
                  <Card.Text>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Ingredients</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>10 large strawberries, washed and sliced</li>
                            <li>2½ cups vanilla ice cream</li>
                            <li>2 cups whole milk</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Instructions</Accordion.Header>
                        <Accordion.Body>
                          <ol>
                            <li>Add the strawberries, whole milk and vanilla ice cream to a blender, and blend until smooth</li>
                            <li>Pour into cold glasses that have been kept in the freezer.Return the shakes to the freezer for about 5 minutes, or until they are thick.Top with whipped cream and sliced strawberries.</li>
                          </ol>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }} className='card'>
                <Card.Img src={sushiImage} />
                <Card.Body>
                  <Card.Title>Japanese Sushi</Card.Title>
                  <Card.Text>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Ingredients</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>Cooked octopus</li>
                            <li>Cooked prawns</li>
                            <li>Raw tuna</li>
                            <li>Salmon</li>
                            <li>Salmon caviar</li>
                            <li>Japanese sticky rice</li>
                            <li>Wasabi</li>
                            <li>Asparagus</li>
                            <li>Shiitake mushrooms</li>
                            <li>Lava seaweed</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Instructions</Accordion.Header>
                        <Accordion.Body>
                          <ol>
                            <li>Pour cooked rice into a tray. Finely slice the salmon and the tuna and put the seaweed onto a sushi mat and press rice down onto it.</li>
                            <li>Slice the mushrooms and asparagus pieces and lay along the rice and add the wasabi</li>
                            <li>Roll the sushi and cut into slices</li>
                            <li>Serve with salmon caviar, wasabi and soy.</li>
                            <li>Recipe two: Squeeze the rice into balls and press the prawns, tuna or salmon into the top.</li>
                          </ol>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }} className='card'>
                <Card.Img src={chickenImage} />
                <Card.Body>
                  <Card.Title>Crispy Buttermilk Fried Chicken</Card.Title>
                  <Card.Text>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Ingredients</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>1 teaspoon paprika</li>
                            <li>1 cup buttermilk</li>
                            <li>2 pounds chicken</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Instructions</Accordion.Header>
                        <Accordion.Body>
                          <ol>
                            <li>Mix flour, salt, paprika and pepper. Dip chicken in buttermilk and then into flour mixture.</li>
                            <li>Cook chicken in oil, starting on medium-high heat, then, when chicken is browned, reduce heat to medium and cook an additional 30 to 35 minutes until chicken is done (approx 150-155 degrees F internal), turning occasionally</li>
                          </ol>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }} className='card'>
                <Card.Img src={riceImage} />
                <Card.Body>
                  <Card.Title>Mango Fried Rice</Card.Title>
                  <Card.Text>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Ingredients</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>2 cups of chicken stock</li>
                            <li>3 slices of mango cubed</li>
                            <li>1 cup of chopped vegetables</li>
                            <li>1 scotch bonnet pepper</li>
                            <li>1 cup of rice</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Instructions</Accordion.Header>
                        <Accordion.Body>
                          <ol>
                            <li>Wash your rice and bring to boil on medium heat with very little water as you are still going to cook it in chicken stock.</li>
                            <li>Once the rice is slightly soft and the initial water has dried up, reduce the heat and pour in the chicken stock and cook till the chicken stock is all absorbed and has dried up. The chicken stock if freshly made will have some oil from the chicken so your rice does not need oil.</li>
                            <li>Increase the heat and stir in the chopped vegetables and pepper</li>
                            <li>Add your seasoning cube.Finally stir in your cubed mango and serve warm with any protein of your choice. I’d say chicken but it’s up to you</li>
                          </ol>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }} className='card'>
                <Card.Img src={pokeImage} />
                <Card.Body>
                  <Card.Title>Hawaiian Poke (Aloha Poke)</Card.Title>
                  <Card.Text>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Ingredients</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>1 lb sushi grade tuna, cubed</li>
                            <li>2 Tbsp soy sauce</li>
                            <li>1/3 c thinly sliced red (or yellow) onion</li>
                            <li>1/2 c sliced scallions aka green onions (green part only)</li>
                            <li>1 tsp sesame seeds</li>
                            <li>1/2 tsp hot pepper flakes (optional)</li>
                            <li>2 Tbsp seaweed (optional)</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Instructions</Accordion.Header>
                        <Accordion.Body>
                          <ol>
                            <li>Cut one sheet of dried seaweed (nori) in half with scissors and cut it in about 1-1/2″ strips.</li>
                            <li>Soak the seaweed in water for a couple of minutes.</li>
                            <li>Squeeze out excess water and set aside.</li>
                            <li>Cut the tuna into 3/4” cubes and mix with all other ingredients in a large bowl.</li>
                            <li>Cover the bowl and put in the refrigerator for a minimum of 15 minutes but no longer than 2 hours.</li>
                          </ol>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        )
        }
      </>
    );
  }
}

export default withAuth0(Recipes);
