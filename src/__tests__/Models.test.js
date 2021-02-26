import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import Models from '../pages/Models';
import store from '../redux/store';

it('renders Models page correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/models']}>
        <Models />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders car models when they are fetched', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/models']}>
        <Models />
      </MemoryRouter>
    </Provider>,
  );

  await waitFor(() => screen.getByText('models'));
  expect(screen.getByText('models')).toBeDefined();
});
