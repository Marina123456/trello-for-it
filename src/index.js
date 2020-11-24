import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { fetchBoard } from './store/card/actions';

//store.dispatch(fetchBoard);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , rootElement);
