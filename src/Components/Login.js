import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchUser } from '../Actions';
import Nav from './Nav';

function Login({ error }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(0);

  const handleChange = (e) => {
    const target = e.target.name;
    const val = e.target.value;
    if (target === 'username') {
      setUsername(val);
    }
    if (target === 'password') {
      setPassword(val);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUser(username, password));
    setTimeout(() => {
      history.push('/');
    }, 2500);
  };

  return (
    <div>
      <Nav />
      <label htmlFor="name">
        Username:
        <input onChange={(e) => handleChange(e)} type="name" name="username" required />
      </label>
      <label htmlFor="password">
        Password:
        <input onChange={(e) => handleChange(e)} type="password" name="password" required />
      </label>
      <button type="button" onClick={(e) => handleSubmit(e)}>Login</button>
      <h2>{ error }</h2>
    </div>
  );
}

const mapStateToProps = (state) => ({
  error: state.errorReducer,
});

Login.propTypes = {
  error: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Login);
