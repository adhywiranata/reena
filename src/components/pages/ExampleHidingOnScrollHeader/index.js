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

class ExampleHidingOnScrollHeaderPage extends React.Component {
  static navigationOptions = ({ navigation }) => { 
    const { goBack } = navigation;
    return {
      headerLeft: (
        <ButtonMolecule
          style={Styles.backButton}
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
      title: 'Hi.',
      description: 'try scrolling. The header will hide when you scroll down.',
      products: [
        { id: 1, name: 'Motivational Book' },
        { id: 2, name: 'Motivational Book' },
        { id: 3, name: 'Motivational Book' },
        { id: 4, name: 'Motivational Book' },
        { id: 5, name: 'Motivational Book' },
        { id: 6, name: 'Motivational Book' },
        { id: 7, name: 'Motivational Book' },
        { id: 8, name: 'Motivational Book' },
        { id: 9, name: 'Motivational Book' },
        { id: 10, name: 'Motivational Book' },
        { id: 11, name: 'Motivational Book' },
        { id: 12, name: 'Motivational Book' },
        { id: 13, name: 'Motivational Book' },
        { id: 14, name: 'Motivational Book' },
        { id: 15, name: 'Motivational Book' },
        { id: 16, name: 'Motivational Book' },
        { id: 17, name: 'Motivational Book' },
        { id: 18, name: 'Motivational Book' },
        { id: 19, name: 'Motivational Book' },
        { id: 20, name: 'Motivational Book' },
        { id: 21, name: 'Motivational Book' },
        { id: 22, name: 'Motivational Book' },
        { id: 23, name: 'Motivational Book' },
      ],
    };
  }

  render() {
    return (
      <ContainerMolecule style={Styles.container}>
        <ScrollViewAtom
          style={{ flex: 1, width: '100%', padding: 20 }}
        >
          <TextAtom style={Styles.logo}>
            {this.state.title}
          </TextAtom>
          <TextAtom style={Styles.desc}>
            {this.state.description}
          </TextAtom>
          {this.state.products.map(product => (
            <ViewAtom key={product.id} style={{ backgroundColor: 'white', padding: 15, borderRadius: 3, marginVertical: 5 }}>
              <TextAtom>{product.name}</TextAtom>
            </ViewAtom>
          ))}
        </ScrollViewAtom>
      </ContainerMolecule>
    );
  }
}

export default connectHOC(ExampleHidingOnScrollHeaderPage);
