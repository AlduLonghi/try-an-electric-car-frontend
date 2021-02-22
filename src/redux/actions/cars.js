import fetchConfig from '../../helpers/fetch';
import { SET_CARS } from './types';

const setCars = carsData => ({
  type: SET_CARS,
  payload: carsData,
});

const fetchCars = () => dispatch => {
  fetch('http://localhost:3000/cars', fetchConfig)
    .then(res => {
      if (res.ok) {
        res.json().then(jsonRes => {
          dispatch(setCars(jsonRes.data));
        });
      }
    });
};

export default fetchCars;
