import "sanitize.css/sanitize.css";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./store";
import App from "./containers/app";
import "./index.css";
import "@fortawesome/fontawesome-free-webfonts/css/fa-solid.css";
import "@fortawesome/fontawesome-free-webfonts/css/fa-brands.css";
import "@fortawesome/fontawesome-free-webfonts/css/fa-regular.css";
import "@fortawesome/fontawesome-free-webfonts/css/fontawesome.css";

// store.dispatch(getCatalog());
const target = document.querySelector("#root");

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
