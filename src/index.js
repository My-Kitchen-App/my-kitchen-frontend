// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.js';
// import { Auth0Provider } from "@auth0/auth0-react";
// import 'bootstrap/dist/css/bootstrap.min.css';


// ReactDOM.render(
//   <Auth0Provider
//     domain={process.env.REACT_APP_AUTH_DOMAIN}
//     clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
//     redirectUri={process.env.REACT_APP_AUTH_REDIRECT_URI}
//   >
//     <App />
//   </Auth0Provider>,
//   document.getElementById("root")
// );

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
