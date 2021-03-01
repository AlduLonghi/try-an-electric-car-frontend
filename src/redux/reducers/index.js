import { combineReducers } from 'redux';
import carsReducer from './cars';
import userReducer from './user';

export default combineReducers({
  user: userReducer,
  cars: carsReducer,
});
