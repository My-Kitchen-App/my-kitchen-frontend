import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/esm/Accordion';
// import SaveRecipeButton  from './SaveRecipeButton';



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

    let instructionsItems = this.props.instructions[0].steps.map((obj, idx) => (
      <li key={idx}>
        {obj.step}
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
            <Accordion.Item eventKey="1">
              <Accordion.Header>Instructions</Accordion.Header>
              <Accordion.Body>
                <ol>
                  {this.props.instructions.length > 0 ? instructionsItems : null}
                </ol>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.props.handleGetInstructions(this.props.recipeObj)}>
              Get Instructions
            </Button>
            {!this.props.saved && <Button onClick={() => this.props.handlePost(this.props.recipeObj)}>Save Recipe</Button>}
            {this.props.saved && <Button >Saved!</Button>}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default RecipeModal;
