import { LOGGED_IN, SET_USER } from './types';

export const loggedIn = logged => ({
  type: LOGGED_IN,
  payload: logged,
});

export const setUser = userData => ({
  type: SET_USER,
  user: userData,
});

export const fetchUser = () => dispatch => {
  fetch('http://localhost:3000/')
    .then(res => {
      dispatch(setUser(res.data));
      dispatch(loggedIn('true'));
    }).catch(() => dispatch(loggedIn('false')));
};
