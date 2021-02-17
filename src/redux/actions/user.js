import { LOGGED_IN, SET_USER } from './types';
import fetchConfig from '../../helpers/fetch';

export const loggedIn = logged => ({
  type: LOGGED_IN,
  payload: logged,
});

export const setUser = userData => ({
  type: SET_USER,
  user: userData,
});

export const fetchUser = () => dispatch => {
  fetch('http://localhost:3000/', fetchConfig)
    .then(res => {
      if (res.ok) {
        res.json().then(jsonRes => {
          console.log(jsonRes);
          dispatch(setUser(jsonRes));
        });
        dispatch(loggedIn('true'));
      } else {
        dispatch(loggedIn('false'));
      }
    });
};
