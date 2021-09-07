import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createItem } from '../Actions';
import Nav from './Nav';
import Footer from './Footer';

function CreateItem({ currentUser }) {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [idealQuantity, setIdealQuantity] = useState(0);
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const errorsObj = {
    code: null, name: '', idealQuantity: null, currentQuantity: null,
  };
  const [errors, setErrors] = useState(errorsObj);

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

  toast.configure();

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (name === '') {
      errorObj.name = 'Name is Required';
      error = true;
    }
    if (code === '') {
      errorObj.code = 'Code is Required';
      error = true;
    }

    if (idealQuantity === 0) {
      errorObj.idealQuantity = 'Ideal Quantity is Required';
      error = true;
    }

    if (currentQuantity === 0) {
      errorObj.currentQuantity = 'Current Quantity is Required';
      error = true;
    }

    setErrors(errorObj);

    if (!error) {
      createItem(code, name, idealQuantity, currentQuantity, currentUser.id);
      document.getElementById('createItem').reset();
      toast.success('A new item has been created');
    }
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
                  {errors.code && <div className="has-text-danger">{errors.code}</div>}
                  <div className="field">
                    <p className="control">
                      <label htmlFor="name" className="label">
                        Name
                        <input className="input is-info is-medium" onChange={(e) => handleChange(e)} type="name" name="name" id="name" required />
                      </label>
                    </p>
                  </div>
                  {errors.name && <div className="has-text-danger">{errors.name}</div>}
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <label htmlFor="idealQuantity" className="label">
                        Ideal Quantity
                        <input className="input is-info is-medium" onChange={(e) => handleChange(e)} type="number" name="idealQuantity" id="idealQuantity" required />
                      </label>
                    </p>
                  </div>
                  {errors.idealQuantity && <div className="has-text-danger">{errors.idealQuantity}</div>}
                  <div className="field">
                    <p className="control">
                      <label htmlFor="currentQuantity" className="label">
                        Current Quantity
                        <input className="input is-info is-medium" onChange={(e) => handleChange(e)} type="number" name="currentQuantity" id="currentQuantity" required />
                      </label>
                    </p>
                  </div>
                  {errors.currentQuantity && <div className="has-text-danger">{errors.currentQuantity}</div>}
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
