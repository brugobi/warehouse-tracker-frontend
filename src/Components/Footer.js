import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="fixed-bottom">
        <div className="container">
          <div className="columns is-mobile is-flex">
            <div className="column">
              <Link to="/CreateItem">Add new Item</Link>
            </div>
            <div className="column">
              <Link to="/">Home</Link>
            </div>
            <div className="column">
              <Link to="/Statistics">Statistics</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
