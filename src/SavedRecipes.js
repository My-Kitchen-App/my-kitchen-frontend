import React from 'react';
import { Accordion, Container, ListGroupItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import axios from 'axios';
import SavedRecipeModal from './SavedRecipeModal';
import Alert from 'react-bootstrap/Alert'


import { withAuth0 } from '@auth0/auth0-react';

class SavedRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbRecipes: [],
      email: '',
      show: false,
      currentRecipe: {},
      gotInstructions: false,
      instructions: []
    };
  }

  getDbRecipes = async () => {

    if (this.props.auth0.isAuthenticated) {
      // from auth0 docs 
      const responseFromAuth0 = await this.props.auth0.getIdTokenClaims();
      // VERY IMPORTANT.  Double underscore!!!
      const jwt = responseFromAuth0.__raw;
      //console.log(jwt);

      //as per axios docs.  take extra care with property names.  they  are specific
      const config = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/saved-recipes',
        headers: {Authorization: `Bearer ${jwt}`},
        params: {email: this.props.auth0.user.email}
      }
      const dbRecipes = await axios(config);
      console.log(dbRecipes)
      this.setState({
        dbRecipes: dbRecipes.data
      });

      console.log(this.state.dbRecipes);
    };
  }

  handleGetDbRecipes = () => {
    this.getDbRecipes();
  }


  deleteDbRecipe = async (_id) => {

    await axios.delete(`${process.env.REACT_APP_SERVER}/recipe/${_id}`)
    if (this.state.dbRecipes.length > 1) {
      this.handleGetDbRecipes();
    }
    else {
      this.setState({
        dbRecipes: []
      })
    }
  }


  handleDelete = (_id) => {
    this.deleteDbRecipe(_id);
  }

  updateDbRecipe = async (url, currentRecipe) => {
    let updatedNotesFromDb = await axios.put(url, currentRecipe);
    //this.getDbRecipes();
  }

  handleUpdateSubmit = (e) => {
    e.preventDefault();
    let notes = e.target.notes.value;
    let currentRecipe = this.state.currentRecipe;
    currentRecipe.notes = notes;
    let url = `${process.env.REACT_APP_SERVER}/recipe/${currentRecipe._id}`
    this.updateDbRecipe(url, currentRecipe);
  }


  getInstructions = async (id) => {
    let url = `${process.env.REACT_APP_SERVER}/analyzedInstructions?recipeid=${id}`
    let instructionsResults = await axios.get(url);
    this.setState({
      instructions: instructionsResults.data[0].steps
    });
    console.log(this.state.instructions);
  };


  handleGetInstructions = (recipeObj) => {
    let id = recipeObj.apiId;
    console.log(id);
    this.setState({
      gotInstructions: true,

    })
    this.getInstructions(id);
  };


  componentDidMount() {
    setTimeout(this.handleGetDbRecipes, 1500);
  }


  handleShowModal = (obj) => {
    this.setState({
      show: true,
      currentRecipe: obj
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

        {this.props.auth0.isAuthenticated ? (null) : (
          <Container>
            <Alert variant="warning">
              <Alert.Heading>Please Login!</Alert.Heading>
              <p>
                If you want to see your saved recipes, you gotta login.
              </p>
            </Alert>
          </Container>
        )}
        <Accordion>
          {
            this.state.dbRecipes.length > 0 ? (
              this.state.dbRecipes.map((obj, idx) => (
                <Accordion.Item key={idx} eventKey={idx}>
                  <Accordion.Header>{obj.title}</Accordion.Header>
                  <Accordion.Body>
                    <Image src={obj.image} />
                    <Button onClick={() => this.handleGetInstructions(obj)}>Get Instructions</Button>
                    <Button onClick={() => this.handleShowModal(obj)}>Update Item</Button>
                    <Button onClick={() => this.handleDelete(obj._id)}>Delete Item</Button>
                    {this.state.gotInstructions ? (
                      <ul>{this.state.instructions.map(obj => <li>{obj.step}</li>)}</ul>
                    ) : (null)}
                  </Accordion.Body>
                </Accordion.Item>
              )
              )
            ) : (null)
          }
        </Accordion>
        {this.state.show &&
          <SavedRecipeModal
            handleCloseModal={this.handleCloseModal}
            handleShowModal={this.handleShowModal}
            handleUpdateSubmit={this.handleUpdateSubmit}
            show={this.state.show}
          />}
      </>



    );
  }
}


export default withAuth0(SavedRecipes);



