import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from 'react-redux';
import store from './Services/redux/store';

ReactDOM.render(
  <Auth0Provider
    domain="dev-09kb75jo.us.auth0.com"
    clientId="w2PpfeffT4ZqnE9f4hNve1yI2wooy71v"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById('root')
);