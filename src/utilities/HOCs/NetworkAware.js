import React from 'react';
import { NetInfo } from 'react-native';

const networkAware = Component => (
  class WrappedComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        isOnline: false,
        type: null,
        effectiveType: null,
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
        effectiveType: connectionInfo.effectiveType,
      });
    }

    render() {
      return <Component {...this.props} networkStatus={this.state} />;
    }
  }
);

export default networkAware;
