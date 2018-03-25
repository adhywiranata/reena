import React from 'react';
import {
  Animated
} from 'react-native';

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
    return {
      header: null,
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
      headerTop: new Animated.Value(0),
      prevScrollY: 0,
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

    this._scrollPage = this._scrollPage.bind(this);
  }

  _scrollPage(event) {
    const y = event.nativeEvent.contentOffset.y;
    const prevY = this.state.prevScrollY;
    if(y > prevY) {
      Animated.timing(
        this.state.headerTop,
        {
          toValue: -50,
          duration: 200,
        }
      ).start();
    } else {
      Animated.timing(
        this.state.headerTop,
        {
          toValue: 0,
          duration: 200,
        }
      ).start();
    }

    this.setState({ prevScrollY: y });
  }

  render() {
    return (
      <ContainerMolecule style={Styles.container}>
        <Animated.View style={{ backgroundColor: '#446CB3', paddingVertical: 30, paddingHorizontal: 10, width: '100%', position: 'absolute', top: this.state.headerTop, zIndex: 995 }}>
          <TextAtom style={{ color: '#FFFFFF' }}>HEADER</TextAtom>
        </Animated.View>
        <ScrollViewAtom
          onScroll={this._scrollPage}
          style={{ flex: 1, width: '100%', paddingHorizontal: 20, paddingTop: 70 }}
        >
          <ViewAtom style={{ backgroundColor: 'white', paddingVertical: 10 }}>
            <TextAtom style={Styles.logo}>
              {this.state.title}
            </TextAtom>
            <TextAtom style={Styles.desc}>
              {this.state.description}
            </TextAtom>
          </ViewAtom>
          {this.state.products.map(product => (
            <ViewAtom key={product.id} style={{ backgroundColor: '#F5F5F5', padding: 15, borderRadius: 3, marginVertical: 5 }}>
              <TextAtom>{product.name}</TextAtom>
            </ViewAtom>
          ))}
        </ScrollViewAtom>
      </ContainerMolecule>
    );
  }
}

export default connectHOC(ExampleHidingOnScrollHeaderPage);
