import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaBoxes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';

function Nav() {
  const username = localStorage.getItem('username');
  const history = useHistory();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleLogout = () => {
    localStorage.removeItem('username');
    history.go(0);
  };

  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <div className="navbar-item">
            <IconContext.Provider value={{ size: '40px', color: '#4c79f2' }}>
              <FaBoxes />
            </IconContext.Provider>
          </div>
          <div className="navbar-item brand-name is-white">WAREHOUSE</div>
        </div>
        <div
          className="navbar-burger navbar-end"
          onClick={handleClick}
          onKeyPress={handleClick}
          role="button"
          tabIndex="0"
        >
          {click ? <AiOutlineClose /> : <GiHamburgerMenu />}

        </div>
        <div className={click ? 'nav-menu active' : 'nav-menu'}>
          <div
            onClick={closeMobileMenu}
            onKeyPress={closeMobileMenu}
            role="button"
            tabIndex={0}
          >
            <Link to="/Login">Login</Link>
          </div>
          <div
            onClick={closeMobileMenu}
            onKeyPress={closeMobileMenu}
            role="button"
            tabIndex={0}
          >
            <Link to="/Signup">Signup</Link>
          </div>
        </div>
      </div>

      {username
        ? (
          <div className="navbar-end">
            <div className="navbar-item">
              <Link onClick={handleLogout} to="/">LOGOUT</Link>
            </div>
          </div>
        ) : (

          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <Link to="/Login">Login</Link>
              </div>
              <div className="navbar-item">
                <Link to="/Signup">Signup</Link>
              </div>
            </div>
          </div>
        )}
    </nav>
  );
}

export default Nav;
