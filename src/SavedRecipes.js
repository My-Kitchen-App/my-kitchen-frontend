import React from 'react';
import { Accordion, ListGroupItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';

class SavedRecipes extends React.Component {
  render() {
    return (
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>SavedRecipe 1</Accordion.Header>
          <Accordion.Body>
            <Image src="https://via.placeholder.com/150" />
            <ListGroupItem>Steps</ListGroupItem>
            <Button>Get Instructions</Button>
            <Button>Update Item</Button>
            <Button>Delete Item</Button>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>SavedRecipe 2</Accordion.Header>
          <Accordion.Body>
            <Image src="https://via.placeholder.com/150" />
            <ListGroupItem>Steps</ListGroupItem>
            <Button>Get Instructions</Button>
            <Button>Update Item</Button>
            <Button>Delete Item</Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion >

    );
  }
}

export default SavedRecipes;
