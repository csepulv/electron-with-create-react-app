import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import _ from 'lodash';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './redux/reducer';
import App from './App';

import localStorage from './redux/middlewares/localStorage.middleware';

import './index.css';

const reduxDebugger = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(reducer, reduxDebugger, applyMiddleware(logger, thunk, localStorage));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
