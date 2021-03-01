import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Signup from '../pages/Signup';
import store from '../redux/store';

it('renders Signup page correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Signup />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
