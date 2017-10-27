import React from 'react';

import {
  connectHOC,
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
import { COLORS } from 'reena/src/constants';

import Styles from './styles';

class ExampleListPage extends React.Component {
  static navigationOptions = ({ navigation }) => { 
    const { goBack } = navigation;
    return {
      // headerLeft: ({ goBack }) => ({
      //   left: null,
      // }),
      headerLeft: (
        <ButtonMolecule
          textStyle={Styles.backButtonLabel}
          onPress={() => goBack()}
        >
          BACK
        </ButtonMolecule>
      ),
      headerStyle: {
        backgroundColor: COLORS.grey.lynch,
        borderBottomWidth: 0,
      },
    }
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
      </ContainerMolecule>
    );
  }
}

export default connectHOC(ExampleListPage);
