import { createStore } from "redux";
import todoReducer from "./reducers/reducers";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";

const store = createStore(todoReducer);

const OUss = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(OUss, document.getElementById("root"));
