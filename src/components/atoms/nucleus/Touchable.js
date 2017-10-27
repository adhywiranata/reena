import React from 'react';
import { TouchableOpacity } from 'react-native';
import { pure } from 'recompose';

export default pure(({ children, ...props }) => (
  <TouchableOpacity {...props} activeOpacity={0.6}>
    {children}
  </TouchableOpacity>
));
