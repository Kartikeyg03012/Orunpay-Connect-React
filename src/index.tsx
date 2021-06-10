// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Auth0Provider } from "@auth0/auth0-react";
// import { Provider } from 'react-redux';
// import store from './store'

// ReactDOM.render(
//   <Auth0Provider
//     domain="dev-09kb75jo.us.auth0.com"
//     clientId="w2PpfeffT4ZqnE9f4hNve1yI2wooy71v"
//     redirectUri={window.location.origin}
//   >
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </Auth0Provider>,
//   document.getElementById('root')
// );



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();