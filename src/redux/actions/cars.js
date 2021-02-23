import fetchConfig from '../../helpers/fetch';
import { SET_CARS } from './types';
import baseUrl from '../../helpers/base-url';

const setCars = carsData => ({
  type: SET_CARS,
  payload: carsData,
});

const fetchCars = () => dispatch => {
  fetch(`${baseUrl}/cars`, fetchConfig)
    .then(res => {
      if (res.ok) {
        res.json().then(jsonRes => {
          console.log(jsonRes.data);
          dispatch(setCars(jsonRes.data));
        });
      }
    });
};

export default fetchCars;
