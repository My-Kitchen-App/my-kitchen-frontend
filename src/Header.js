import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';



import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';



class Header extends React.Component {
  render() {
    console.log(this.props.auth0);
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">My Kitchen</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/savedRecipes">Saved Recipes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
            </Nav.Item>
          </Nav>
          {this.props.auth0.isAuthenticated ? <Navbar.Brand><LogoutButton /></Navbar.Brand> : <Navbar.Brand><LoginButton /></Navbar.Brand>
          }
        </Container>
      </Navbar>
    );
  }
}

export default withAuth0(Header);
