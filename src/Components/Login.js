import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../Actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Nav from './Nav';

function Login({ error } ) {
  const dispatch = useDispatch();
  const history = useHistory();
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
    setTimeout(() => {
      history.push('/');
    }, 2500);
  }

  return (
    <div>
      <Nav />
      <label
      >Username:<input onChange={e => handleChange(e)} type='name' name='username' required />
      </label>
      <label
      >Password:<input onChange={e => handleChange(e)} type='password' name='password' required />
      </label>
      <button onClick={e => handleSubmit(e)}>Login</button>
      <h2>{ error }</h2>
    </div>
  );
}

const mapStateToProps = (state) => ({
  error: state.errorReducer
});

export default connect(mapStateToProps, null)(Login);