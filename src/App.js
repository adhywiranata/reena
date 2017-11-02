import React from 'react';
import { Provider } from 'react-redux';

import Router from './Router';
import store from './model/store';

export default () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
