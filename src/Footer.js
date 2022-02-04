import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className='footer'><p> &copy;MyKitchen</p></Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
