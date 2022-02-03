import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebook, FaInstagramSquare, FaPinterest } from "react-icons/fa";

class Footer extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand><p> &copy;MyKitchen</p></Navbar.Brand>
        <Navbar.Brand><a href='https://www.instagram.com/'><FaInstagramSquare /></a></Navbar.Brand>
        <Navbar.Brand><a href='https://www.facebook.com/'><FaFacebook/></a></Navbar.Brand>
        <Navbar.Brand><a href='https://www.pinterest.com/'><FaPinterest/></a></Navbar.Brand>
      </Navbar>

    );
  }
}

export default Footer;
