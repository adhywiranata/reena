import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

import Router from './Router';
import store from './model/store';

const link = createHttpLink({
  uri: 'http://localhost:64086',
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </Provider>
);
