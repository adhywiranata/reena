import React from 'react';
import { Text } from 'react-native';
import { pure } from 'recompose';

export default pure(({ children, ...props }) => (
  <Text {...props}>
    {children}
  </Text>
));
