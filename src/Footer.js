import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand><p> &copy;MyKitchen</p></Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
