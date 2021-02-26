import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import Profile from '../pages/Profile';
import store from '../redux/store';

it('renders Profile page correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/profile']}>
        <Profile />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
