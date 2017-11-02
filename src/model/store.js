import { createStore } from 'redux';

import rootReducer from './reducer';
import rootSaga from './saga';
import middlewares, { sagaMiddleware } from './middlewares';

const store = createStore(rootReducer, middlewares);
sagaMiddleware.run(rootSaga);

export default store;
