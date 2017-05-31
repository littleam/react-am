import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { fetchGet } from './actions'

import Routers from './routes/index.js';
import './index.css';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}


const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);
store.dispatch(fetchGet());

ReactDOM.render(
    <Provider store={store}>
        <Routers />
    </Provider>,
  document.getElementById('root')
);







