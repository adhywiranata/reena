import React from 'react';

import {
  networkAwareHOC,
} from 'reena/src/utilities/HOCs';
import {
  TextAtom,
} from 'reena/src/components/atoms';
import {
  ContainerMolecule,
} from 'reena/src/components/molecules';

class WelcomePage extends React.Component {
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
        <TextAtom>{JSON.stringify(this.props.networkStatus)}</TextAtom>
      </ContainerMolecule>
    );
  }
}

export default networkAwareHOC(WelcomePage);
