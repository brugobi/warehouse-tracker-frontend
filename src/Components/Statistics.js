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
          Hey&nbsp;&nbsp;
          {user.username}
        </span>
        <ul>
          {items.length === 0 ? <h2>No items</h2>
            : items.map((item) => (
              <section key={item.id}>
                <div className="container" key={item.code}>
                  <div className="columns items-wrapper">
                    <div className="column courier">
                      <p className="subtitle color-orange">{item.code}</p>
                      <p className="is-size-1 title color-blue">{item.name}</p>
                    </div>
                    <div className="column courier">
                      <p className={(item.current_quantity
                        - item.ideal_quantity) >= 0 ? 'is-success is-size-2 subtitle' : 'is-danger is-size-2 subtitle'}
                      >
                        {
                            item.current_quantity
                            - item.ideal_quantity
                          }
                      </p>

                    </div>
                  </div>
                </div>
              </section>
            ))}
        </ul>
        <Footer />
      </div>
    </>
  );
};

export default Statistics;
