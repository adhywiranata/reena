import React from 'react';
import { Animated } from 'react-native';

import {
  TouchableAtom,
  TextAtom,
} from 'reena/src/components/atoms';

import Styles from './styles';

export default class ScreenOverlay extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      opacity: new Animated.Value(0),
    };

    this._toggleOverlay = this._toggleOverlay.bind(this);
  }

  componentDidMount() {
    this._toggleOverlay();
    // setTimeout(this._toggleOverlay, 3000);
  }

  _toggleOverlay() {
    const { isVisible } = this.state;
    Animated.timing(
      this.state.opacity,
      {
        toValue: isVisible ? 0 : 1,
        duration: 500,
      },
    ).start();
    const screenDelay = isVisible ? 200 : 0;
    setTimeout(this.setState.bind(this, { isVisible: !isVisible }), screenDelay);
  }

  render() {
    return (
      this.state.isVisible ?
        <Animated.View style={[Styles.container, { opacity: this.state.opacity }]}>
          <TouchableAtom
            style={Styles.touchable}
            activeOpacity={1}
            onPress={this.props.onPress ? this.props.onPress : () => {}}
          />
        </Animated.View>
        :
        null
    );
  }
}

