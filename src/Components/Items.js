import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { connect } from 'react-redux';

const Items = ({ user, itemData }) => {
  return (
    <div className="App">
      <Nav />
      <span>Hey{user.username}, id: {user.id}</span>
      <div>{itemData.name}</div>
      <div className="navbar-item">
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}

const selector = (state) => ({
  user: state.userReducer,
  itemData: state.itemReducer,
})
export default connect(selector, null)(Items);
