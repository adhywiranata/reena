import React from 'react';
import { Animated, Dimensions } from 'react-native';

import Styles from './styles';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
      width: new Animated.Value(0),
      height: new Animated.Value(0),
      top: new Animated.Value(0),
      left: new Animated.Value(0),
    };

    this._toggleModal = this._toggleModal.bind(this);
  }

  componentDidMount() {
    this._toggleModal({ isVisible: false, style: {} });
  }

  componentWillReceiveProps(nP) {
    this._toggleModal(nP);
  }

  _toggleModal(nextProps) {
    const { isVisible, style } = nextProps;
    const modalWidth = style.width ? style.width : 200;
    const modalHeight = style.height ? style.height : 200;
    const visibleModalTop = (Dimensions.get('window').height - modalHeight) / 2;
    const visibleModalLeft = (Dimensions.get('window').width - modalWidth) / 2;
    // alert(Dimensions.get('window').width / 2);
    Animated.parallel([
      Animated.timing(
        this.state.opacity,
        {
          toValue: isVisible ? 1 : 0,
          duration: 200,
        },
      ),
      Animated.timing(
        this.state.height,
        {
          toValue: isVisible ? modalHeight : 0,
          duration: 1,
        },
      ),
      Animated.timing(
        this.state.width,
        {
          toValue: isVisible ? modalWidth : 0,
          duration: 1,
        },
      ),
      Animated.timing(
        this.state.left,
        {
          toValue: isVisible ? visibleModalLeft : 200,
          duration: 1,
        },
      ),
      Animated.spring(
        this.state.top,
        {
          toValue: isVisible ? visibleModalTop : 200,
          bounciness: 12,
        },
      ),
    ]).start();
  }

  render() {
    return (
      <Animated.View style={[
          Styles.container,
          {
            ...this.props.style,
            // add additional height to avoid bouncing empty space
            // paddingBottom: this.props.style.paddingBottom ? this.props.style.paddingBottom + 50 : 50,
          },
          { ...this.state },
        ]}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

