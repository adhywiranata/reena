import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../saga';

export const sagaMiddleware = createSagaMiddleware(rootSaga);

const middlewaresSetup = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middlewaresSetup.push(logger);
}

export default applyMiddleware(...middlewaresSetup);
