import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { connect } from 'react-redux';

const Items = ({ currentUser, itemsData }) => {
  return (
    <div className="App">
      <Nav />
      <span>Hey{currentUser.username}, id: {currentUser.id}</span>
      <div className="navbar-item">
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}

const selector = (state) => ({
  currentUser: state.userReducer,
  itemsData: state.addReducer,
})
export default connect(selector, null)(Items);
