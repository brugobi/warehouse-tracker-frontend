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
        <div>
          {itemData.map((item) => (
            <p key={item.code}>{item.name}</p>
          ))}
        </div>
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
