import { createStore, applyMiddleware } from "redux";
// TODO separate reducers for each view
import todoReducer from "./views/todoList/reducers";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'
import { appSagas } from './appServices/appSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  todoReducer,
  applyMiddleware(sagaMiddleware),
);

appSagas.forEach(saga => sagaMiddleware.run(saga));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
