import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';





class InstructionsModal extends React.Component {




  render() {

    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.instructions.map((obj, index) => (
            <Card key={index}>
              <Card.Body>
                <Card.Title>{obj.number}</Card.Title>
                <Card.Text>
                  {obj.step}
                </Card.Text>
              </Card.Body>
            </Card>
            ))

            }
          </Modal.Body>
        </Modal>

      </>
    );
  }
}

export default InstructionsModal;
