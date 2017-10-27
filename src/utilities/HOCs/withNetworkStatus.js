import React from 'react';
import { NetInfo } from 'react-native';
import hoistNonReactStatic from 'hoist-non-react-statics';

const withNetworkStatus = (WrappedComponent) => {
  class EnhancedComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        isOnline: false,
        type: null,
      };

      this._onConnectivityChange = this._onConnectivityChange.bind(this);
    }

    componentDidMount() {
      NetInfo.addEventListener(
        'connectionChange',
        this._onConnectivityChange,
      );
    }

    componentWillUnmount() {
      NetInfo.removeEventListener(
        'connectionChange',
        this._onConnectivityChange,
      );
    }

    _onConnectivityChange(connectionInfo) {
      this.setState({
        isOnline: connectionInfo.type !== 'none',
        type: connectionInfo.type,
      });
    }

    render() {
      return <WrappedComponent {...this.props} networkStatus={{ ...this.state }} />;
    }
  }

  hoistNonReactStatic(EnhancedComponent, WrappedComponent);

  return EnhancedComponent;
};

export default withNetworkStatus;
