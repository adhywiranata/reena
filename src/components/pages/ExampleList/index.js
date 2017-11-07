import React from 'react';

import {
  connectHOC,
} from 'reena/src/utilities/HOCs';
import {
  ScrollViewAtom,
  TextAtom,
  ViewAtom,
} from 'reena/src/components/atoms';
import {
  ContainerMolecule,
  ButtonMolecule,
} from 'reena/src/components/molecules';
import {
  SwipeToDismissViewOrganism,
} from 'reena/src/components/organisms';
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
        <ScrollViewAtom
          style={{ flex: 1, width: '100%', backgroundColor: '#dddddd', padding: 20 }}
        >
          {[1, 2, 3, 4, 5, 6].map(n => (
            <SwipeToDismissViewOrganism key={n} containerHeight={100} bounciness={0}>
              <ViewAtom style={{ backgroundColor: 'white', padding: 15, borderRadius: 8, marginVertical: 5 }}>
                <TextAtom>{'test\ntest2\ntest3'}</TextAtom>
              </ViewAtom>
            </SwipeToDismissViewOrganism>
          ))}
        </ScrollViewAtom>
      </ContainerMolecule>
    );
  }
}

export default connectHOC(ExampleListPage);
