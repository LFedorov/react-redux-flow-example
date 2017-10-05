// @flow

import "./index.css";
import 'core-js/es6/map';
import 'core-js/es6/set';
import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

import { Provider } from "react-redux";
import Store from "./store";

const Root = () =>
  <Provider store={Store}>
    <App />
  </Provider>;

ReactDOM.render(<Root />, document.getElementById("root"));
