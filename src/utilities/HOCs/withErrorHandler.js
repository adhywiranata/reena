import React from 'react';
import { TextAtom } from 'reena/src/components/atoms';

const logError = (ErrorInfo) => {
  // log error to services like crashlitics
};

const withErrorHandler = (WrappedComponent, ErrorComponent = null) => {
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false,
      };
    }

    componentDidCatch(error, info) {
      this.setState({
        hasError: true,
      });
      logError(info);
    }

    render() {
      const { hasError } = this.state;
      if (hasError) {
        return ErrorComponent !== null ? (
          <ErrorComponent />
        ) : (
          <TextAtom>Ooops, we caught an error</TextAtom>
        );
      }
      return this.props.children;
    }
  }

  return props => (
    <ErrorBoundary {...props}>
      <WrappedComponent />
    </ErrorBoundary>
  );
};

export default withErrorHandler;
