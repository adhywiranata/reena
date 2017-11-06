import React from 'react';
import {
  Animated,
  PanResponder,
  Dimensions,
} from 'react-native';

// import {
//   ViewAtom,
// } from 'reena/src/components/atoms';

export default class SwipeToDismissView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(1),
      height: new Animated.Value(100),
      left: new Animated.Value(0),
    };

    this._setPosition = this._setPosition.bind(this);
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderMove: Animated.event([
        null, { dx: this.state.left },
      ]),
      onPanResponderRelease: (evt, gestureState) => {
        const screenWidth = Dimensions.get('window').width;
        if (gestureState.dx > screenWidth / 3) {
          Animated.parallel([
            Animated.spring(
              this.state.left,
              {
                toValue: screenWidth,
                bounciness: 5,
              },
            ),
            Animated.timing(
              this.state.height,
              {
                toValue: 0,
                duration: 200,
              },
            ),
          ]).start();
        } else if (gestureState.dx < -(screenWidth / 3)) {
          Animated.parallel([
            Animated.spring(
              this.state.left,
              {
                toValue: -(screenWidth),
                bounciness: 5,
              },
            ),
            Animated.timing(
              this.state.height,
              {
                toValue: 0,
                duration: 200,
              },
            ),
            Animated.timing(
              this.state.opacity,
              {
                toValue: 0,
                duration: 200,
              },
            ),
          ]).start();
        } else {
          Animated.spring(
            this.state.left,
            {
              toValue: 0,
              bounciness: 5,
            },
          ).start();
        }
      },
      // onPanResponderMove: Animated.event([
      //   null,
      //   { dX: this.state.left },
      // ]),
    });
  }

  componentDidMount() {
    this._setPosition(0);
  }

  _setPosition(xPos) {
    Animated.timing(
      this.state.left,
      {
        toValue: xPos,
        duration: 200,
      },
    ).start();
  }

  render() {
    return (
      <Animated.View {...this._panResponder.panHandlers} style={{ ...this.state }}>
        {this.props.children}
      </Animated.View>
    );
  }
}

