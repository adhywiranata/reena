import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { ERRORS } from 'reena/src/constants';

const graphQLConnect = (Component) => {
  // check if the component have the graphQLQuery static method
  if (Component.graphQLQuery) {
    return graphql(gql(Component.graphQLQuery()))(Component);
  }

  // return the component without being connected to graphql since there are no queries
  console.warn(ERRORS.noGraphQLQuery);
  return Component;
};

export default graphQLConnect;
