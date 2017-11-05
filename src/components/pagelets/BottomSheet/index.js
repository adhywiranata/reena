import React from 'react';
import { Animated } from 'react-native';

import Styles from './styles';

export default class BottomSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bottom: new Animated.Value(-500),
    };

    this._toggleSheet = this._toggleSheet.bind(this);
  }

  componentDidMount() {
    this._toggleSheet(false);
  }

  componentWillReceiveProps(nP) {
    this._toggleSheet(nP.isVisible);
  }

  _toggleSheet(isVisible) {
    Animated.spring(
      this.state.bottom,
      {
        toValue: isVisible ? -50 : -500,
        duration: 200,
      },
    ).start();
  }

  render() {
    return (
      <Animated.View style={[Styles.container, this.props.style, { bottom: this.state.bottom }]}>
        {this.props.children}
      </Animated.View>
    );
  }
}

