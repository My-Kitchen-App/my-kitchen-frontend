import React from 'react';
import Button from 'react-bootstrap/Button';

class RenderModalButton extends React.Component {
  render() {
    return(
      <Button variant='secondary' onClick={() => this.props.handleShowModal(this.props.recipe)}>Preview Recipe</Button>
    )
  }
}

export default RenderModalButton;
