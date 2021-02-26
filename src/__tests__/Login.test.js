import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Login from '../pages/Login';
import store from '../redux/store';

it('renders Login page correctly', () => {
    const tree = renderer.create(
        <Provider store={store}>
          <Login />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});