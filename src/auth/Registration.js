/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import registerUser from '../redux/user/registrationAction';

const Registration = () => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [password_confirmation, setConfirm_password] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    const loginData = {
      user: {
        username,
        password,
        password_confirmation
      }
    };
    dispatch(registerUser(loginData));
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input onChange={(e) => setUserName(e.target.value)} type="userName" name="username" placeholder="name"></input>
        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="password"></input>
        <input onChange={(e) => setConfirm_password(e.target.value)} type="password" name="password" placeholder="password"></input>
        <button type="submit">Register</button>
      </form>
    </div>

  );
};

export default Registration;
