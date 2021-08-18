import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { connect } from 'react-redux';

const Home = ({currentUser}) => {
  return (
    <div className="App">
      <Nav />
      <span>I am {currentUser.username}, id: {currentUser.id}</span>
      <div className="navbar-item">
        <Link to="/CreateItem">Add new Item</Link>
        <Link to="/Items">Item</Link>
      </div>
    </div>
  );
}

const selector = (state) => ({
  currentUser: state.userReducer,
})
export default connect(selector, null)(Home);
