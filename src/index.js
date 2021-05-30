import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from './components/LoginButton.js';
import LogoutButton from './components/LogoutButton.js';
import Profile from './components/Profile.js';
import MyFavoriteBooks from './myFavoriteBooks'
import Login from './Login'


ReactDOM.render(
  <Auth0Provider
    domain="dev-47nw90cg.eu.auth0.com"
    clientId="RpDiZCts2YIaOZjHx87lB8WKz4e1tyUM"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);