import React from 'react';
import { View } from 'react-native';

export default ({ children, ...props }) => (
  <View {...props}>
    {children}
  </View>
);
