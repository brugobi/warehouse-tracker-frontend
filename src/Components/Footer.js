import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsGraphUp } from 'react-icons/bs';
import { GrAddCircle } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="fixed-bottom">
        <div className="container">
          <div className="columns is-mobile is-flex">
            <div className="column">
              <Link to="/CreateItem"><GrAddCircle /></Link>
            </div>
            <div className="column">
              <Link to="/"><AiFillHome /></Link>
            </div>
            <div className="column">
              <Link to="/Statistics"><BsGraphUp /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
