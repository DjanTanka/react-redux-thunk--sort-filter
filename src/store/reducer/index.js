import {combineReducers} from 'redux';
import syncReducer from './syncReducer';
import asyncReducer from './asyncReducer'

export default combineReducers({
  syncReducer,
  asyncReducer,
})