import React from 'react';
import {
  TextAtom,
  TouchableAtom,
} from 'reena/src/components/atoms';

import Styles from './styles';

export default ({ children, style, textStyle, ...props }) => (
  <TouchableAtom {...props} style={[Styles.container, style]}>
    {typeof children === 'string' && (
      <TextAtom style={[Styles.text, textStyle]}>{children}</TextAtom>
    )}
    {typeof children !== 'string' && children}
  </TouchableAtom>
);
