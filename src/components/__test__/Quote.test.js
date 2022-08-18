import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../Quote';

it('should renderer', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
