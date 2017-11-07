import React from 'react';
import { ScrollView } from 'react-native';
import { pure } from 'recompose';

export default pure(({ children, ...props }) => (
  <ScrollView {...props}>
    {children}
  </ScrollView>
));
