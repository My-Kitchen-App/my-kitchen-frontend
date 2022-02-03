import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Recipes from './Recipes';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from './AboutUs';

import SavedRecipes from './SavedRecipes';



import { withAuth0 } from '@auth0/auth0-react';

import './App.css';

class App extends React.Component {


  render() {
    return (
      <>


        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Recipes />}>
            </Route>
            <Route exact path="/savedRecipes" element={<SavedRecipes />}>
            </Route>
            <Route exact path="/aboutus" element={<AboutUs />}>
            </Route>
          </Routes>
          <Footer />
        </Router>
        
      </>
    );
  }
}

export default withAuth0(App);
