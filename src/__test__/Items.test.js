import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Items from '../Components/Items';
import store from '../Reducers/index';

describe('Items component', () => {
  it('Matches the snapshot', () => {
    const tree = renderer.create(<Provider store={store}><Items /></Provider>).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
