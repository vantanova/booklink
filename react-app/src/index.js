import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import { Provider } from "react-redux";
import configureStore from "./store/index";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={configureStore()}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
