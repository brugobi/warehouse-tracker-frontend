import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createItem } from '../Actions';
import Nav from './Nav';
import Footer from './Footer';

function CreateItem({ currentUser }) {
  const [code, setCode] = useState(0);
  const [name, setName] = useState('');
  const [idealQuantity, setIdealQuantity] = useState(0);
  const [currentQuantity, setCurrentQuantity] = useState(0);

  const handleChange = (e) => {
    const target = e.target.name;
    const val = e.target.value;
    // console.log(target);
    if (target === 'code') {
      setCode(val);
    }
    if (target === 'name') {
      setName(val);
    }
    if (target === 'idealQuantity') {
      setIdealQuantity(val);
    }
    if (target === 'currentQuantity') {
      setCurrentQuantity(val);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createItem(code, name, idealQuantity, currentQuantity, currentUser.id);
    document.getElementById('createItem').reset();
  };

  return (
    <div>
      <Nav />
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <form id="createItem" className="box">
              <h1 className="title">Create Item</h1>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <label htmlFor="code" className="label">
                        Code
                        <input className="input is-info is-medium" onChange={(e) => handleChange(e)} type="text" name="code" id="code" required />
                      </label>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <label htmlFor="name" className="label">
                        Name
                        <input className="input is-info is-medium" onChange={(e) => handleChange(e)} type="name" name="name" id="name" required />
                      </label>
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <label htmlFor="idealQuantity" className="label">
                        Ideal Quantity
                        <input className="input is-info is-medium" onChange={(e) => handleChange(e)} type="name" name="idealQuantity" id="idealQuantity" required />
                      </label>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <label htmlFor="currentQuantity" className="label">
                        Current Quantity
                        <input className="input is-info is-medium" onChange={(e) => handleChange(e)} type="name" name="currentQuantity" id="currentQuantity" required />
                      </label>
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <p className="control" />
                  </div>
                  <div className="field">
                    <p className="control">
                      <button className="button is-info is-medium is-fullwidth" type="button" onClick={(e) => handleSubmit(e)}>Create</button>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
const selector = (state) => ({
  currentUser: state.userReducer,
});

CreateItem.propTypes = {
  currentUser: PropTypes.string.isRequired,
};

export default connect(selector, null)(CreateItem);
