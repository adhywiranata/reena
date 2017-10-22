import { createStore } from 'redux';

const rootReducer = () => ({
  test: () => ({ message: 'hey' }),
});

const store = createStore(rootReducer);

export default store;
