import React, { useState } from 'react';
import { fetchUser } from '../Actions';
import { useDispatch } from 'react-redux';

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(0);

  const handleChange = (e) => {
    let target = e.target.name
    let val = e.target.value
    if (target === 'username') {
      setUsername(val)
    }
    if (target === 'password') {
      setPassword(val)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchUser(username, password))
  }

  return (
    <div>
      <label
      >Username:<input onChange={e => handleChange(e)} type='name' name='username' required />
      </label>
      <label
      >Password:<input onChange={e => handleChange(e)} type='password' name='password' required />
      </label>
      <button onClick={e => handleSubmit(e)}>Login</button>
    </div>
  );
}

export default Login;