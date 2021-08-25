import React from 'react';
/* eslint-disable */
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Statistics = () => (
  <div className="App">
    <Nav />
    Statistics
    <div className="navbar-item">
      <Link to="/">Back</Link>
    </div>
  </div>
);

export default Statistics;
