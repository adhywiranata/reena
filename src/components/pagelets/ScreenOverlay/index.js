import React from 'react';
import { Animated, Dimensions } from 'react-native';

import {
  TouchableAtom,
} from 'reena/src/components/atoms';

import Styles from './styles';

export default class ScreenOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
      height: new Animated.Value(0),
    };

    this._toggleOverlay = this._toggleOverlay.bind(this);
  }

  componentDidMount() {
    this._toggleOverlay(false);
  }

  componentWillReceiveProps(np) {
    this._toggleOverlay(np.isVisible);
  }

  _toggleOverlay(isVisible) {
    Animated.parallel([
      Animated.timing(
        this.state.opacity,
        {
          toValue: isVisible ? 1 : 0,
          duration: 500,
        },
      ),
      Animated.timing(
        this.state.height,
        {
          toValue: isVisible ? Dimensions.get('window').height : 0,
          duration: 1,
        },
      ),
    ]).start();
  }

  render() {
    const { opacity, height } = this.state;
    return (
      <Animated.View style={[Styles.container, this.props.style, { opacity, height }]}>
        <TouchableAtom
          style={Styles.touchable}
          activeOpacity={1}
          onPress={this.props.onPress ? this.props.onPress : () => {}}
        />
      </Animated.View>
    );
  }
}

