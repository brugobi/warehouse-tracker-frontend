import React from 'react';
/* eslint-disable */
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from './Footer';
import Nav from './Nav';
import Items from './Items';

const Home = ({ currentUser }) => (
  <div className="App">
    <Nav />
    <main>
      I am
      {currentUser.username}
      , id:
      {currentUser.id}
    <Items />
    </main>
    <Footer />
  </div>
);

const selector = (state) => ({
  currentUser: state.userReducer,
});
export default connect(selector, null)(Home);
