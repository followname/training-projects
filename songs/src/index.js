import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";
import redusers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(redusers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
