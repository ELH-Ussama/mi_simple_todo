import { createStore, applyMiddleware } from "redux";
import todoReducer from "./reducers/reducers";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'
import { getDataSaga } from './services/getData';

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
