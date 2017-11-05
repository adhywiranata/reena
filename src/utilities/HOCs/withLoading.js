import React from 'react';
import { TextAtom } from 'reena/src/components/atoms';
import hoistNonReactStatic from 'hoist-non-react-statics';

const withLoading = (WrappedComponent) => {
  class EnhancedComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        renderLoadingComponent: () => <TextAtom>Loading...</TextAtom>,
      };
    }

    render() {
      const { isLoading } = this.props;
      if (isLoading) {
        return this.state.renderLoadingComponent();
      }
      return <WrappedComponent {...this.props} />;
    }
  }

  hoistNonReactStatic(EnhancedComponent, WrappedComponent);

  return EnhancedComponent;
};

export default withLoading;
