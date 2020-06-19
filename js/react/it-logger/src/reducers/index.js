// This will be the root reducer, which will import all the other reducers.

import { combineReducers } from 'redux';

import logReducer from './logReducer';

// combineReducers() takes in an object containing all of your reducers!
export default combineReducers({
  log: logReducer
});
