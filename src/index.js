import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n';
import store from './store';

ReactDOM.render(
  <Suspense fallback={<div>Loading... </div>}>
    <Provider store={store}>
      <LoadingBar />
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
