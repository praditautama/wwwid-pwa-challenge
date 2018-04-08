import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './stores';
import Routes from './routes';

import registerServiceWorker from './registerServiceWorker';

render(
  // eslint-disable-next-line
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
