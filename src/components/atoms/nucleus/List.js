import React from 'react';
import { FlatList } from 'react-native';
import { pure } from 'recompose';

export default pure(({ ...props }) => (
  <FlatList {...props} />
));
