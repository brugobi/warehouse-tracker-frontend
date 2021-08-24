import React from 'react';
/* eslint-disable */
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from './Nav';

const Home = ({ currentUser }) => (
  <div className="App">
    <Nav />
    <span>
      I am
      {currentUser.username}
      , id:
      {currentUser.id}
    </span>
    <div className="navbar-item">
      <Link to="/CreateItem">Add new Item</Link>
      <Link to="/Items">Item</Link>
    </div>
  </div>
);

const selector = (state) => ({
  currentUser: state.userReducer,
});
export default connect(selector, null)(Home);
