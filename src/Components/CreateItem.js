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
      add item
      <label htmlFor="code">
        Code:
        <input onChange={(e) => handleChange(e)} type="name" name="code" required />
      </label>
      <label htmlFor="name">
        Name:
        <input onChange={(e) => handleChange(e)} type="name" name="name" required />
      </label>
      <label htmlFor="ideal_quantity">
        ideal_quantity:
        <input onChange={(e) => handleChange(e)} type="name" name="ideal_quantity" required />
      </label>
      <label htmlFor="current_quantity">
        current_quantity:
        <input onChange={(e) => handleChange(e)} type="name" name="current_quantity" required />
      </label>
      <button type="button" onClick={(e) => handleSubmit(e)}>Add</button>
      <Footer />
    </div>
  );
}
const selector = (state) => ({
  currentUser: state.userReducer,
});
export default connect(selector, null)(CreateItem);
