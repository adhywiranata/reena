import { connect as reduxConnect } from 'react-redux';

const connect = Component => (
  reduxConnect(Component.mapStateToProps, Component.mapDispatchToProps)(Component)
);

export default connect;
