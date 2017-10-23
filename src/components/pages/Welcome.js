import React from 'react';

import {
  connectHOC,
  networkAwareHOC,
} from 'reena/src/utilities/HOCs';
import {
  TextAtom,
} from 'reena/src/components/atoms';
import {
  ContainerMolecule,
} from 'reena/src/components/molecules';

class WelcomePage extends React.Component {
  static navigationOptions = {
    header: null,
  }
  
  static mapStateToProps(state) {
    return {
      test: state,
    };
  }

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
        <TextAtom>{JSON.stringify(this.props)}</TextAtom>
      </ContainerMolecule>
    );
  }
}

export default networkAwareHOC(connectHOC(WelcomePage));
