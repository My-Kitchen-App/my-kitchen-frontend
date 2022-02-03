import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




class SavedRecipeModal extends React.Component {



  
  render() {

    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.handleUpdateSubmit}>
              <Form.Group controlId="notes">
                <Form.Label>Notes</Form.Label>
                <Form.Control type="text" placeholder={'write some notes here'} />
              </Form.Group>
              <Button type="submit">Add Notes</Button>
            </Form>
          </Modal.Body>
        </Modal>
        
      </>
    );
  }
}

export default SavedRecipeModal;
