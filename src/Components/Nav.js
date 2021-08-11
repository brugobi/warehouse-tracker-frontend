import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        <div className="navbar-item">
          <div className="brand">WAREHOUSE</div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <Link to="/Login">Login</Link>
        </div>
        <div className="navbar-item">
          <Link to="/Signup">Signup</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
