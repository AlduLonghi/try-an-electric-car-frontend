import { LOGGED_IN, SET_USER } from './types';
import fetchConfig from '../../helpers/fetch';
import baseUrl from '../../helpers/base-url';

export const loggedIn = logged => ({
  type: LOGGED_IN,
  payload: logged,
});

export const setUser = userData => ({
  type: SET_USER,
  user: userData,
});

export const fetchUser = () => dispatch => {
  fetch(baseUrl, fetchConfig())
    .then(res => {
      if (res.ok) {
        res.json().then(jsonRes => {
          dispatch(setUser(jsonRes));
        });
        dispatch(loggedIn('true'));
      } else {
        dispatch(loggedIn('false'));
      }
    });
};

export const loginUser = loginInputs => dispatch => (
  fetch(`${baseUrl}/login`, {
    ...fetchConfig(),
    method: 'POST',
    body: JSON.stringify(loginInputs),
  })
    .then(res => {
      if (res.ok) {
        res.json().then(jsonRes => {
          localStorage.setItem('token', jsonRes.token);
          dispatch(setUser(jsonRes.user));
        });
        dispatch(loggedIn('true'));
      } else {
        dispatch(loggedIn('false'));
      }
      return res;
    })
);

export const signupUser = signupInputs => dispatch => (
  fetch(`${baseUrl}/users`, {
    ...fetchConfig(),
    method: 'POST',
    body: JSON.stringify(signupInputs),
  })
    .then(res => {
      if (res.ok) {
        res.json().then(jsonRes => {
          localStorage.setItem('token', jsonRes.token);
          dispatch(setUser(jsonRes.user));
          dispatch(loggedIn('true'));
        });
      } else {
        dispatch(loggedIn('false'));
      }
      return res;
    })
);
