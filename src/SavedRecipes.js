import React from 'react';
import { Accordion, ListGroupItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import axios from 'axios';
import SavedRecipeModal from './SavedRecipeModal';
import InstructionsModal from './InstructionsModal';

import { withAuth0 } from '@auth0/auth0-react';
import Instructions from './Instructions';

class SavedRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbRecipes: [],
      email: '',
      show: false,
      currentRecipe: {},
      gotInstructions: false,
      instructions: [],
      savedRecipeModal: false,
      instructionsModal: false,
      noteAdded: false


    };
  }

  getDbRecipes = async (email) => {

    const dbRecipes = await axios.get(`http://localhost:3001/saved-recipes?email=${email}`);
    this.setState({
      dbRecipes: dbRecipes.data
    });

    console.log(this.state.dbRecipes);
  };


  handleGetDbRecipes = () => {
    //console.log(this.props.auth0);
    const email = this.props.auth0.user.email;
    this.getDbRecipes(email);

  }


  deleteDbRecipe = async (_id) => {

    await axios.delete(`http://localhost:3001/recipe/${_id}`)
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
    this.setState({
      gotInstructions: false
    })
  }
  updateDbRecipe = async (url, currentRecipe) => {
    await axios.put(url, currentRecipe);
  }

  handleUpdateSubmit = (e) => {
    e.preventDefault();
    let notes = e.target.notes.value;
    let currentRecipe = this.state.currentRecipe;
    currentRecipe.notes = notes;
    let url = `http://localhost:3001/recipe/${currentRecipe._id}`
    this.updateDbRecipe(url, currentRecipe);
    this.setState ({
      noteAdded: true
    })
  }


  getInstructions = async (id) => {
    let url = `http://localhost:3001/analyzedInstructions?recipeid=${id}`
    let instructionsResults = await axios.get(url);
    console.log(instructionsResults);
    this.setState({
      instructions: instructionsResults.data[0].steps,
      gotInstructions: true,
      instructionsModal: true,
      show: true
    });
    console.log(this.state.instructions);
  };




  componentDidMount() {
    setTimeout(this.handleGetDbRecipes, 1500);
  }


  handleCloseSavedRecipeModal = () => {
    this.setState({
      show: false,
      savedRecipeModal: false,
      noteAdded: false
    })
    console.log(this.state.noteAdded)
  };

  handleCloseInstructionsModal = () => {
    this.setState({
      show: false,
      instructionsModal: false,
      
    })
  };


  renderSavedRecipeModal = (obj) => {
    this.setState({
      savedRecipeModal: true,
      show: true,
      currentRecipe: obj,
    })
    
  }

  handleGetInstructions = (recipeObj) => {
    let id = recipeObj.apiId;
    console.log(id);
    this.setState({
      gotInstructions: true,

    })
    this.getInstructions(id);

  }

  renderInstructionsModal = (recipeObj) => {
    let id = recipeObj.apiId;
    this.getInstructions(id);

  }

  render() {
    return (
      <>
        <Accordion>
          {
            this.state.dbRecipes.length > 0 ? (
              this.state.dbRecipes.map((obj, idx) => (
                <Accordion.Item key={idx} eventKey={idx}>
                  <Accordion.Header>{obj.title}</Accordion.Header>
                  <Accordion.Body>
                    <Image src={obj.image} />
                    {obj.notes ? <p>{obj.notes}</p> : <p>Add Notes</p>}
                    <Button onClick={() => this.renderInstructionsModal(obj)}>Get Instructions</Button>
                    <Button onClick={() => this.renderSavedRecipeModal(obj)}>Update Item</Button>
                    <Button onClick={() => this.handleDelete(obj._id)}>Delete Item</Button>
                  </Accordion.Body>
                </Accordion.Item>
              )
              )
            ) : (null)
          }
        </Accordion>
        {this.state.savedRecipeModal &&
          <SavedRecipeModal
            handleCloseModal={this.handleCloseSavedRecipeModal}
            handleUpdateSubmit={this.handleUpdateSubmit}
            show={this.state.show}
            noteAdded={this.state.noteAdded}
          />}
        {this.state.instructionsModal &&
          <InstructionsModal
            handleCloseModal={this.handleCloseInstructionsModal}
            show={this.state.show}
            instructions={this.state.instructions}

          />
        }
      </>



    );
  }
}


export default withAuth0(SavedRecipes);



