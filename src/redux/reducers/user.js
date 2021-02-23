import { LOGGED_IN, SET_USER } from '../actions/types';

const initialState = {
  loggedIn: '',
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        loggedIn: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
