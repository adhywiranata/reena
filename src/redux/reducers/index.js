import { combineReducers } from 'redux';

import sampleReducer from './exampleReducer';
import exampleNewsReducer from './exampleNewsReducer';

// list down each reducers below to combine them into the single redux store
export default combineReducers({
  sample: sampleReducer,
  exampleNews: exampleNewsReducer,
});
