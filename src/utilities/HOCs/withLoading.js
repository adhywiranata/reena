import React from 'react';
import { TextAtom } from 'reena/src/components/atoms';
import hoistNonReactStatic from 'hoist-non-react-statics';

const withLoading = (WrappedComponent) => {
  class EnhancedComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: props.isLoading || false,
      };
    }

    render() {
      const { isLoading } = this.state;
      if (isLoading) {
        return <TextAtom>Loading...</TextAtom>;
      }
      return <WrappedComponent {...this.props} />;
    }
  }

  hoistNonReactStatic(EnhancedComponent, WrappedComponent)

  return EnhancedComponent;
};

export default withLoading;
