import React from 'react';
import { NetInfo } from 'react-native';

const networkAware = (WrappedComponent) => {
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

  EnhancedComponent.navigationOptions = WrappedComponent.navigationOptions;

  return EnhancedComponent;
};

export default networkAware;
