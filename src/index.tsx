import { createStore, applyMiddleware } from "redux";
// TODO separate reducers for each view
import todoReducer from "./views/todoList/reducers";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'
import { getDataSaga } from './appServices/getData';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  todoReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(getDataSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
