import React from 'react';

import {
  TextAtom,
} from 'reena/src/components/atoms';
import {
  ContainerMolecule,
} from 'reena/src/components/molecules';

export default class WelcomePage extends React.Component {
  constructor(p, c) {
    super(p, c);

    this.state = {
      title: 'Welcome to Reena',
    };
  }

  render() {
    return (
      <ContainerMolecule>
        <TextAtom>{this.state.title}</TextAtom>
      </ContainerMolecule>
    );
  }
}
