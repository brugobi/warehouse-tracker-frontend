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

  const itemData = useSelector((state) => state.itemReducer);
  const user = useSelector((state) => state.userReducer);

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
        {user.id !== itemData.id ? <h2>No items</h2>
          : (
            <ul>
              {itemData.map((item) => (
                <li key={item.code}>
                  <p>
                    {item.name}
                    {item.id}
                  </p>
                </li>
              ))}
            </ul>
          )}
        <div className="navbar-item">
          <Link to="/">Back</Link>
        </div>
      </div>
    </>
  );
};

// const selector = (state) => ({
//   user: state.userReducer,
//   itemData: state.itemReducer,
// })
// export default connect(selector, null)(Items);

export default Items;
