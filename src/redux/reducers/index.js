import { combineReducers } from 'redux';

import sampleReducer from './sampleReducer';

// list down each reducers below to combine them into the single redux store
export default combineReducers({
  sample: sampleReducer,
});
