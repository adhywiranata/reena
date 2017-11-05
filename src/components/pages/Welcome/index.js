import React from 'react';

import {
  connectHOC,
  withBottomSheetHOC,
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
  BottomSheetPagelet,
  ScreenOverlayPagelet,
} from 'reena/src/components/pagelets';
import {
  sampleHelper,
} from 'reena/src/utilities/helpers';

import Styles from './styles';
import {
  getNewsTitlesSelector,
  getNewsLoadingStatusSelector,
} from 'reena/src/model/modules/exampleNews/selectors';

const RealComp = withLoadingHOC(() => (
  <TextAtom>SMTH...</TextAtom>
));

const TestComp = props => <TextAtom>{props.message}</TextAtom>;

class WelcomePage extends React.Component {
  static navigationOptions = {
    header: null,
  }
  
  static mapStateToProps(state) {
    return {
      exampleNews: getNewsTitlesSelector(state.exampleNews),
      isLoading: getNewsLoadingStatusSelector(state.exampleNews),
    };
  }

  static mapDispatchToProps(dispatch) {
    return {
      fetchExampleNews: () => dispatch({ type: 'FETCH_EXAMPLE_NEWS' }),
    };
  }

  constructor(p, c) {
    super(p, c);

    this.state = {
      title: 'REE.NA',
      // isModalVisible: false,
    };
  }

  componentDidMount() {
    this.props.fetchExampleNews();
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
        <ButtonMolecule
          onPress={() => this.props.onToggleBottomSheet({
            render: () => <TestComp message={'this is a bottom sheet inside!!!'} />,
            containerStyle: { backgroundColor: 'white', alignItems: 'flex-start' },
          })}
          style={{ borderRadius: 5, marginVertical: 20 }}
          textStyle={{ fontWeight: '300', fontSize: 14 }}
        >
          Show Bottom Sheet
        </ButtonMolecule>
      </ContainerMolecule>
    );
  }
}

export default withBottomSheetHOC(withNetworkStatusHOC(connectHOC(WelcomePage)));
