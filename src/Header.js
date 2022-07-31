import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';

import './Header.css'


class Header extends React.Component {
  render() {
    //console.log(this.props.auth0);
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
               alt=""
               src="https://i.imgur.com/KS3ahA9.jpg"
               width="30"
               height="30"
               className="d-inline-block align-top"
            />{' '}
          M Y K I C H E N I
          </Navbar.Brand>
          <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/savedRecipes">Saved Recipes</Nav.Link>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
          </Nav>
          {this.props.auth0.isAuthenticated ? <Navbar.Brand><LogoutButton /></Navbar.Brand> : <Navbar.Brand><LoginButton /></Navbar.Brand>
          }
        </Container>
      </Navbar>
    );
  }
}

export default withAuth0(Header);
