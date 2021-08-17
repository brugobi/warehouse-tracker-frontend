import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Nav() {
  const username = localStorage.getItem('username')
  const history = useHistory()
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        <div className="navbar-item">
          <div className="brand">WAREHOUSE</div>
        </div>
      </div>

      {username ? 
      (
          <button onClick={() => {
            localStorage.removeItem('username')
            history.go(0)
          }}>LOGOUT</button>
        ): (<div className="navbar-end">
        <div className="navbar-item">
          <Link to="/Login">Login</Link>
        </div>
        <div className="navbar-item">
          <Link to="/Signup">Signup</Link>
        </div>
        </div>)
      }
    </nav>
  );
}

export default Nav;
