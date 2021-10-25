import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import configureStore from "./store/index";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-efx9dom5.us.auth0.com"
      clientId="PcSwTwfb5cJ2ZH9oSBWqByywkcjYKwn4"
      redirectUri={window.location.origin}
    >
      <Router>
        <Provider store={configureStore()}>
          <App />
        </Provider>
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
