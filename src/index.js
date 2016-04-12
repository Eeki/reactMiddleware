import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import Async from './middleware/async';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore); //If multiple middleware they must be separated with comma. Example --> applyMiddleware(Async, Logging, etc)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
