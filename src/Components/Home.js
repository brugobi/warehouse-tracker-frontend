import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Nav from './Nav';
import Items from './Items';

const Home = ({ currentUser }) => (
  <div className="App">
    <Nav />
    <div>
      <p>
        I am&nbsp;&nbsp;
        {currentUser.username}
      </p>
      <Items />
    </div>
    <Footer />
  </div>
);

const selector = (state) => ({
  currentUser: state.userReducer,
});

Home.propTypes = {
  currentUser: PropTypes.string.isRequired,
};

export default connect(selector, null)(Home);
