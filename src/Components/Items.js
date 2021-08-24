/* eslint-disable */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './Nav';
import { fetchItems } from '../Actions';

const Items = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  const user = useSelector((state) => state.userReducer);
  const item = useSelector((state) => state.itemReducer).filter((item) => user.id === item.user)[0];

  return (
    <>
      <div className="App">
        <Nav />
        <span>
          Hey
          {user.username}
          , id:
          {user.id}
        </span>
        <ul>
          {!item ? <h2>No items</h2>
            :
            <li key={item.code}>
              <p>
                {item.name}
                {item.id}
              </p>
            </li>
          }
        </ul>
        <div className="navbar-item">
          <Link to="/">Back</Link>
        </div>
      </div>
    </>
  );
};

export default Items;
