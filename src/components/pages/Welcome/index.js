import React from 'react';

import {
  connectHOC,
  graphQLConnectHOC,
  withBottomSheetHOC,
  withModalHOC,
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
  <TextAtom>I should be ready after loading!</TextAtom>
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

  static graphQLQuery() {
    return `
      query {
        allFilms {
          films {
            title
            id
          }
        }
      }
    `;
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
        {<TextAtom>{JSON.stringify(this.props.data)}</TextAtom>}
        <RealComp isLoading />
        <ButtonMolecule
          onPress={() => this.props.onToggleBottomSheet({
            render: () => <TestComp message={'this is a bottom sheet inside!!!'} />,
            overlayStyle: { backgroundColor: 'rgba(0, 0, 0, 0.4)', },
            bottomMenuContainerStyle: { backgroundColor: 'white', height: 200 },
          })}
          style={{ borderRadius: 5, marginVertical: 20 }}
          textStyle={{ fontWeight: '300', fontSize: 14 }}
        >
          Show Bottom Sheet
        </ButtonMolecule>
        <ButtonMolecule
          onPress={() => this.props.onToggleModal({
            render: () => <TestComp message={'this is a modal inside!!!'} />,
            overlayStyle: { backgroundColor: 'rgba(0, 0, 0, 0.6)', },
            modalContainerStyle: { backgroundColor: 'white', height: 250 },
          })}
          style={{ borderRadius: 5, marginVertical: 20 }}
          textStyle={{ fontWeight: '300', fontSize: 14 }}
        >
          Show Modal
        </ButtonMolecule>
      </ContainerMolecule>
    );
  }
}

export default withModalHOC(withBottomSheetHOC(withNetworkStatusHOC(graphQLConnectHOC(connectHOC(WelcomePage)))));
