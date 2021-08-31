/* eslint-disable */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createItem } from '../Actions';
import Nav from './Nav';
import Footer from './Footer';

function CreateItem({ currentUser }) {
  const [code, setCode] = useState(0);
  const [name, setName] = useState('');
  const [ideal_quantity, setIdealQuantity] = useState(0);
  const [current_quantity, setCurrentQuantity] = useState(0);

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
    if (target === 'ideal_quantity') {
      setIdealQuantity(val);
    }
    if (target === 'current_quantity') {
      setCurrentQuantity(val);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createItem(code, name, ideal_quantity, current_quantity, currentUser.id);
  };

  return (
    <div>
      <Nav />
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="box">
              <h1 className="title">Create Item</h1>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <label className="label">Code</label>
                      <input className="input is-info is-medium" onChange={(e) => handleChange(e)} type="text" name="code" required />
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <label className="label">Name</label>
                      <input className="input is-info is-medium" onChange={(e) => handleChange(e)} type="name" name="name" required />
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <label className="label">Ideal Quantity</label>
                      <input className="input is-info is-medium" onChange={(e) => handleChange(e)} type="name" name="ideal_quantity" required />
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <label className="label">Current Quantity</label>
                      <input className="input is-info is-medium" onChange={(e) => handleChange(e)} type="name" name="current_quantity" required />
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
            </div>
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
export default connect(selector, null)(CreateItem);
