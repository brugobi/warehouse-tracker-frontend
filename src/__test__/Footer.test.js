import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import renderer from 'react-test-renderer';
import { GrAddCircle } from 'react-icons/gr';
import { AiFillHome } from 'react-icons/ai';
import { BsGraphUp } from 'react-icons/bs';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Router>
      <Link to="/CreateItem"><GrAddCircle /></Link>
      ,
      <Link to="/"><AiFillHome /></Link>
      ,
      <Link to="/Statistics"><BsGraphUp /></Link>
      ,
    </Router>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
