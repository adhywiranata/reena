import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

import {
  ModalPagelet,
  ScreenOverlayPagelet,
} from 'reena/src/components/pagelets';

const withModal = (WrappedComponent) => {
  class EnhancedComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isModalVisible: false,
        renderModalComponent: () => null,
        overlayStyle: {},
        modalContainerStyle: {},
      };

      this._toggleModal = this._toggleModal.bind(this);
    }

    _toggleModal(params = {}) {
      this.setState({
        isModalVisible: !this.state.isModalVisible,
        renderModalComponent: params.render ? params.render : () => null,
        overlayStyle: params.overlayStyle ? params.overlayStyle : this.state.overlayStyle,
        modalContainerStyle: params.modalContainerStyle ?
          params.modalContainerStyle :
          this.state.modalContainerStyle,
      });
    }

    render() {
      const {
        modalContainerStyle,
        isModalVisible,
        overlayStyle,
      } = this.state;
      const injectedProps = {
        onToggleModal: this._toggleModal,
      };
      return [
        <WrappedComponent key={1} {...this.props} {...injectedProps} />,
        <ScreenOverlayPagelet
          key={2}
          isVisible={isModalVisible}
          onPress={this._toggleModal}
          style={overlayStyle}
        />,
        <ModalPagelet
          key={3}
          isVisible={isModalVisible}
          style={modalContainerStyle}
        >
          {this.state.renderModalComponent()}
        </ModalPagelet>,
      ];
    }
  }

  hoistNonReactStatic(EnhancedComponent, WrappedComponent);

  return EnhancedComponent;
};

export default withModal;
