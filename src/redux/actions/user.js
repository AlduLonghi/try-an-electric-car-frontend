import axios from 'axios';
import { LOGGED_IN, SET_USER } from './types';

const loggedIn = (logged) => ({
    type: LOGGED_IN,
    payload: logged
});

const setUser = () => dispatch => {
    axios.get(`localhost:3000/`,
      { headers: { 'Access-Control-Allow-Origin': '*' } })
      .then(res => {
        dispatch(loggedIn(true));
        dispatch({
          type: SET_USER,
          user: res.data,
        });
      }).catch(error => dispatch(loggedIn(false)));
};

export default setUser;