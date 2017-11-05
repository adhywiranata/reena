import React from 'react';
import { TextAtom } from 'reena/src/components/atoms';
import hoistNonReactStatic from 'hoist-non-react-statics';

import {
  BottomSheetPagelet,
  ScreenOverlayPagelet,
} from 'reena/src/components/pagelets';

const withBottomSheet = (WrappedComponent) => {
  class EnhancedComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isBottomSheetVisible: false,
        bottomComponent: () => <TextAtom>blah</TextAtom>,
        containerStyle: {},
      };

      this._toggleBottomSheet = this._toggleBottomSheet.bind(this);
    }

    _toggleBottomSheet(params = {}) {
      this.setState({
        isBottomSheetVisible: !this.state.isBottomSheetVisible,
        bottomComponent: params.render ? params.render : () => null,
        containerStyle: params.containerStyle ? params.containerStyle : this.state.containerStyle,
      });
    }

    render() {
      const { isBottomSheetVisible, containerStyle } = this.state;
      const injectedProps = {
        onToggleBottomSheet: this._toggleBottomSheet,
      };
      return [
        <WrappedComponent key={1} {...this.props} {...injectedProps} />,
        <ScreenOverlayPagelet
          key={2}
          isVisible={isBottomSheetVisible}
          onPress={this._toggleBottomSheet}
        />,
        <BottomSheetPagelet
          key={3}
          isVisible={isBottomSheetVisible}
          style={containerStyle}
        >
          {this.state.bottomComponent()}
        </BottomSheetPagelet>,
      ];
    }
  }

  hoistNonReactStatic(EnhancedComponent, WrappedComponent);

  return EnhancedComponent;
};

export default withBottomSheet;
