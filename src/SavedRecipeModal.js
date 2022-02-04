import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SavedRecipeModal.css';



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
                <Form.Label className='notes'>Notes</Form.Label>
                <Form.Control type="text" placeholder={'Write Notes Here 📝'} />
              </Form.Group>
              {!this.props.noteAdded && <Button className='add-note' variant="outline-warning" type="submit">Add Notes</Button>}
              {this.props.noteAdded &&<Button className='note-added' variant="success">Note Added</Button>}
            </Form>
          </Modal.Body>
        </Modal>
        
      </>
    );
  }
}

export default SavedRecipeModal;
