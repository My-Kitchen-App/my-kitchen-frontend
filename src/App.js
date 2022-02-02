import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Recipes from './Recipes';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from './AboutUs';

import { withAuth0 } from '@auth0/auth0-react';


class App extends React.Component {

  
  render() {
    return (
      <>
        <Header />
        
        <Router>
          <Routes>
            <Route exact path="/" element={<Recipes />}>
            </Route>
            <Route exact path="/savedRecipes">
            </Route>
            <Route exact path="/aboutus" element={<AboutUs />}>
            </Route>
          </Routes>
        </Router>
        <Footer />
      </>
    );
  }
}

export default withAuth0(App);
