import React from 'react';

import {
  ViewAtom,
} from 'reena/src/components/atoms';

export default ({ children, ...props }) => (
  <ViewAtom {...props}>
    {children}
  </ViewAtom>
);
