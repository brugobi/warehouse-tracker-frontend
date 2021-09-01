import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../Actions';

const Items = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  const user = useSelector((state) => state.userReducer);
  const items = useSelector((state) => state.itemReducer).filter((item) => user.id === item.user);

  return (
    <>
      {items.length === 0 ? <h2>No items</h2>
        : items.map((item) => (
          <section key={item.id}>
            <div className="container" key={item.code}>
              <div className="columns items-wrapper">
                <div className="column courier">
                  <p className="subtitle color-orange">{item.code}</p>
                  <p className="is-size-1 title color-blue">{item.name}</p>
                </div>
                <div className="column OpenSans-font">
                  <div className="is-flex is-justify-content-center">
                    <div className="Comments">
                      Delete&nbsp;&nbsp;
                    </div>
                    <div className="Comments">
                      |&nbsp;&nbsp;Edit
                    </div>
                  </div>
                </div>
                <div className="column courier">
                  <p className="title">Quantity</p>
                  <p className="is-size-2 subtitle color-blue">{item.current_quantity}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
    </>
  );
};

export default Items;
