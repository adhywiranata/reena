import React from 'react';

import {
  connectHOC,
  withLoadingHOC,
  withNetworkStatusHOC,
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
import { getMessageSelector } from 'reena/src/redux/reducers/sampleReducer';

const RealComp = withLoadingHOC(() => (
  <TextAtom>SMTH...</TextAtom>
));


class WelcomePage extends React.Component {
  static navigationOptions = {
    header: null,
  }
  
  static mapStateToProps(state) {
    return {
      sample: getMessageSelector(state.sample),
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
          onPress={this.props.navigation.navigate.bind(this, 'Examples')}
          style={{ borderRadius: 5, marginVertical: 20 }}
          textStyle={{ fontWeight: '300', fontSize: 14 }}
        >
          View Usage Examples
        </ButtonMolecule>
        <TextAtom>{JSON.stringify(this.props)}</TextAtom>
        <RealComp isLoading />
      </ContainerMolecule>
    );
  }
}

export default withNetworkStatusHOC(connectHOC(WelcomePage));
