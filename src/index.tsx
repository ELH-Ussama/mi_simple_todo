import { createStore, applyMiddleware } from "redux";
import appReducers from "./appReducers";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'
import { appSagas } from './appServices/appSaga';
import todoReducer from './views/todoList/reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  appReducers,
  applyMiddleware(sagaMiddleware),
);

appSagas.forEach(saga => sagaMiddleware.run(saga));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
