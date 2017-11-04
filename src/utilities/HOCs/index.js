import connect from './connect';
import withErrorHandler from './withErrorHandler';
import withLoading from './withLoading';
import withNetworkStatus from './withNetworkStatus';

export {
  connect as connectHOC,
  withErrorHandler as withErrorHandlerHOC,
  withLoading as withLoadingHOC,
  withNetworkStatus as withNetworkStatusHOC,
};
