import React from 'react';
import { View } from 'react-native';
import { pure } from 'recompose';

export default pure(({ children, ...props }) => (
  <View {...props}>
    {children}
  </View>
));
