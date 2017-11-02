import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware(rootSaga);

const middlewaresSetup = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middlewaresSetup.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewaresSetup));
sagaMiddleware.run(rootSaga);

export default store;
