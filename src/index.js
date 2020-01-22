// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';
// import 'intersection-observer'; // <-- its allright (just weird)
// import 'core-js/features/reflect/apply';
// npm i react-app-polyfill core-js (interseciton-observer)

import React from 'react';
import ReactDOM from 'react-dom';

import './scss/index.min.css';
import * as serviceWorker from './serviceWorker';

import { isIE } from './helper';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import { rootReducer as reducer } from './redux';
import MainRouter from './router';
import ScrollRestoration from './router/scrollRestoration';

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeReduxMiddlewares = () => {
  if (process.env.NODE_ENV === 'development') {
    return compose(applyMiddleware(reduxThunk), reduxDevTools);
  } else {
    return compose(applyMiddleware(reduxThunk));
  }
};

const store = createStore(reducer, composeReduxMiddlewares());

if (isIE()) {
  document.body.classList.add('is-ie');
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollRestoration>
        <MainRouter />
      </ScrollRestoration>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// if videos are present on site and safari support is necessary
// const isSafari = !!navigator.userAgent.match(/Version\/[\d.]+.*Safari/);
// if (isSafari) serviceWorker.unregister();
// else serviceWorker.register();
