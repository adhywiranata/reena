import React from 'react';
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
        bottomComponent: () => null,
        overlayStyle: {},
        bottomMenuContainerStyle: {},
      };

      this._toggleBottomSheet = this._toggleBottomSheet.bind(this);
    }

    _toggleBottomSheet(params = {}) {
      this.setState({
        isBottomSheetVisible: !this.state.isBottomSheetVisible,
        bottomComponent: params.render ? params.render : () => null,
        overlayStyle: params.overlayStyle ? params.overlayStyle : this.state.overlayStyle,
        bottomMenuContainerStyle: params.bottomMenuContainerStyle ?
          params.bottomMenuContainerStyle :
          this.state.bottomMenuContainerStyle,
      });
    }

    render() {
      const {
        bottomMenuContainerStyle,
        isBottomSheetVisible,
        overlayStyle,
      } = this.state;
      const injectedProps = {
        onToggleBottomSheet: this._toggleBottomSheet,
      };
      return [
        <WrappedComponent key={1} {...this.props} {...injectedProps} />,
        <ScreenOverlayPagelet
          key={2}
          isVisible={isBottomSheetVisible}
          onPress={this._toggleBottomSheet}
          style={overlayStyle}
        />,
        <BottomSheetPagelet
          key={3}
          isVisible={isBottomSheetVisible}
          style={bottomMenuContainerStyle}
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
