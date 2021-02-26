import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import Lifestyle from '../pages/Lifestyle';
import store from '../redux/store';

it('renders Lifestyle page correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/lifestyle']}>
        <Lifestyle />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
