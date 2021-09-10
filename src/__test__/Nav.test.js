import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import renderer from 'react-test-renderer';

test('Link changes the class when clicked', () => {
  const component = renderer.create(
    <Router>
      <Link to="/Login">Login</Link>
      ,
      <Link to="/Signup">Signup</Link>
      ,
      <Link to="/">LOGOUT</Link>
      ,
    </Router>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
