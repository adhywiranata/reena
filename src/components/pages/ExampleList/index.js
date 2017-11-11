import React from 'react';

import {
  connectHOC,
} from 'reena/src/utilities/HOCs';
import {
  ScrollViewAtom,
  TextAtom,
  TouchableAtom,
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
      title: 'HELLO.',
      description: 'Pick some screens below',
      pages: [
        { id: 1, name: 'Swipable List', link: null },
        { id: 2, name: 'Swipe Card', link: null },
        { id: 3, name: 'Collapsible List', link: null },
        { id: 4, name: 'Drag and Drop', link: null },
        { id: 5, name: 'Redux Integration', link: null },
        { id: 6, name: 'GraphQL Integration', link: null },
        { id: 7, name: 'Hiding on-scroll Header', link: 'ExampleHidingOnScrollHeader' },
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
          {this.state.pages.map(page => (
            <TouchableAtom key={page.id} onPress={this.props.navigation.navigate.bind(this, page.link)}>
              <ViewAtom style={{ backgroundColor: 'white', padding: 15, borderRadius: 3, marginVertical: 5 }}>
                <TextAtom>{page.name}</TextAtom>
              </ViewAtom>
            </TouchableAtom>
          ))}
        </ScrollViewAtom>
      </ContainerMolecule>
    );
  }
}

export default connectHOC(ExampleListPage);
