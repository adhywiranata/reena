import React from 'react';
import { Animated } from 'react-native';

import {
  ViewAtom,
} from 'reena/src/components/atoms';

import Styles from './styles';

export default class BottomSheet extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      bottom: new Animated.Value(-500),
    };

    this._toggleSheet = this._toggleSheet.bind(this);
  }

  componentDidMount() {
    this._toggleSheet();
    // setTimeout(this._toggleOverlay, 3000);
  }

  _toggleSheet() {
    const { isVisible } = this.state;
    Animated.timing(
      this.state.bottom,
      {
        toValue: isVisible ? -500 : 0,
        duration: 200,
      },
    ).start();
    const screenDelay = isVisible ? 200 : 0;
    setTimeout(this.setState.bind(this, { isVisible: !isVisible }), screenDelay);
  }

  render() {
    return (
      this.state.isVisible ?
        <Animated.View style={[Styles.container, { bottom: this.state.bottom }]} /> :
        null
    );
  }
}

