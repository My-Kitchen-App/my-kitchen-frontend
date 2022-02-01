import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';


//import { withAuth0 } from '@auth0/auth0-react';



class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">My Kitchen</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="savedRecipes">Saved Recipes</Nav.Link>
            <Nav.Link href="aboutus">About Us</Nav.Link>
          </Nav>
          <Navbar.Brand href="">Login</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
