import React from 'react';
import { Text } from 'react-native';

export default ({ children, ...props }) => (
  <Text {...props}>
    {children}
  </Text>
);
