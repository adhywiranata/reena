import React from 'react';
import { TouchableOpacity } from 'react-native';

export default ({ children, ...props }) => (
  <TouchableOpacity {...props} activeOpacity={0.6}>
    {children}
  </TouchableOpacity>
);
