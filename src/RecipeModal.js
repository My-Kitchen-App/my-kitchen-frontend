import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/esm/Accordion';
import LoginButton from './LoginButton';
import Alert from 'react-bootstrap/Alert'


import { withAuth0 } from '@auth0/auth0-react';




class RecipeModal extends React.Component {
  render() {
    let editList = this.props.missedIngredients.map((obj) => {
      return obj.name.charAt(0).toUpperCase() + obj.name.slice(1)
    })
    let listItems = editList.map((el, index) => (
      <li key={index}>
        {el}
      </li>
    ));
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.recipeImg} alt='recipe'></img>
          </Modal.Body>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Missing Ingredients</Accordion.Header>
              <Accordion.Body>
                <ul>
                  {listItems}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.props.handleGetInstructions(this.props.recipeObj)}>
              Get Instructions
            </Button>
            {this.props.auth0.isAuthenticated ?
              (!this.props.saved && <Button onClick={() => this.props.handlePost(this.props.recipeObj)}>Save Recipe</Button>) : (<LoginButton />)}
            {this.props.saved && <Button>Saved!</Button>}
            {this.props.auth0.isAuthenticated ? (null) : (
              <Alert variant="warning">
                <Alert.Heading>Please Login!</Alert.Heading>
                <p>
                  If you want to save a recipe, you gotta login.
                </p>
              </Alert>
            )}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withAuth0(RecipeModal);
