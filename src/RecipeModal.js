import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';



class RecipeModal extends React.Component {
  render() {
    let ListItems = this.props.missedIngredients.map((obj, index) => (
      <ListGroupItem>
        {obj.name}
      </ListGroupItem>
    ));
    return (
      <>
        <Button variant="primary" onClick={this.props.handleShowModal}>
          Launch demo modal
        </Button>
        <Modal show={this.props.show} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.recipeImg}></img>

            <Card style={{ width: '18rem' }}>
              <Card.Header>Missing Ingredient Count: {this.props.missedIngredients.length}</Card.Header>
              <ListGroup variant="flush">
                {ListItems}
              </ListGroup>
            </Card>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">
              Get Instructions
            </Button>
            <Button variant="primary">
              Save Recipe
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default RecipeModal;
