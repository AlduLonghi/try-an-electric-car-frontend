import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Models from '../pages/Models';
import store from '../redux/store';
import { MemoryRouter } from 'react-router';

it('renders Login page correctly', () => {
    const tree = renderer.create(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/models']}>
            <Models />
          </MemoryRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});