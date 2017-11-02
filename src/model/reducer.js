import { combineReducers } from 'redux';

// import sampleReducer from './modules/news/exampleReducer';
import exampleNewsReducer from './modules/exampleNews/reducer';

// list down each reducers below to combine them into the single redux store
export default combineReducers({
  sample: exampleNewsReducer,
  exampleNews: exampleNewsReducer,
});
