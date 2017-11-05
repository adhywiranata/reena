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
      };

      this._toggleBottomSheet = this._toggleBottomSheet.bind(this);
    }

    _toggleBottomSheet() {
      this.setState({ isBottomSheetVisible: !this.state.isBottomSheetVisible });
    }

    render() {
      const { isBottomSheetVisible } = this.state;
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
        <BottomSheetPagelet key={3} isVisible={isBottomSheetVisible} />,
      ];
    }
  }

  hoistNonReactStatic(EnhancedComponent, WrappedComponent);

  return EnhancedComponent;
};

export default withBottomSheet;
