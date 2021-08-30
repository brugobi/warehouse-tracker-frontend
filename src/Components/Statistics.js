import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './Nav';
import Footer from './Footer';
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
            : items.map((item) => (
              <li key={item.code}>
                <p>
                  {
                      item.ideal_quantity
                      - item.current_quantity
                    }
                </p>
              </li>
            ))}
        </ul>
        <Footer />
      </div>
    </>
  );
};

export default Statistics;
