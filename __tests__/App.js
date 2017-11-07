import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('Search snapshot test', () => {
  const component = renderer.create(<App />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot();
})

