import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import _ from 'lodash';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './redux/reducer';
import App from './App';

import { saveState } from './redux/localStorage';

import './index.css';

const reduxDebugger = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(
  reducer,
  reduxDebugger,
  applyMiddleware(logger, thunk)
);

store.subscribe(_.throttle(() => saveState(store.getState(), 5000)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
