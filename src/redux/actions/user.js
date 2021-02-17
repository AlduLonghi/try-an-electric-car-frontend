import axios from 'axios';
import { LOGGED_IN, SET_USER } from './types';

const loggedIn = logged => ({
  type: LOGGED_IN,
  payload: logged,
});

const setUser = () => dispatch => {
  axios.get('localhost:3000/', {})
    .then(res => {
      dispatch({
        type: SET_USER,
        user: res.data,
      });
      dispatch(loggedIn(true));
    }).catch(() => dispatch(loggedIn(false)));
};

export default setUser;
