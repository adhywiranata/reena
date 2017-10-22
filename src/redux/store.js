import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  test: () => ({ message: 'hey' }),
});

const store = createStore(rootReducer);

export default store;
