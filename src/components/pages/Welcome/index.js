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
  ButtonMolecule,
} from 'reena/src/components/molecules';
import {
  sampleHelper,
} from 'reena/src/utilities/helpers';

import Styles from './styles';

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
      title: 'REE.NA',
    };
  }

  render() {
    return (
      <ContainerMolecule style={Styles.container}>
        <TextAtom style={Styles.logo}>
          {this.state.title}
        </TextAtom>
        <ButtonMolecule
          style={{ borderRadius: 5, marginVertical: 20 }}
          textStyle={{ fontWeight: '200', fontSize: 14 }}
        >
          View Examples
        </ButtonMolecule>
      </ContainerMolecule>
    );
  }
}

export default networkAwareHOC(connectHOC(WelcomePage));
