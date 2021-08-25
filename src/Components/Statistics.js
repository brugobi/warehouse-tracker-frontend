/* eslint-disable */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './Nav';
import { fetchItems } from '../Actions';

const Statistics = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  const user = useSelector((state) => state.userReducer);
  const items = useSelector((state) => state.itemReducer).filter((item) => user.id === item.user);

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
          {items.length === 0 ? <h2>No items</h2>
            :
              items.map((item) =>
                <li key={item.code}>
                  <p>
                    {
                      item.ideal_quantity -
                      item.current_quantity
                    }
                  </p>
                </li>
              )
            
          }
        </ul>
        <div className="navbar-item">
          <Link to="/">Back</Link>
        </div>
      </div>
    </>
  );
};

export default Statistics;

