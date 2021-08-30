import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchUser } from '../Actions';
import Nav from './Nav';
import background from '../img/background.jpg';

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
    <div style={{ backgroundImage: `url(${background})` }}>
      <Nav />
      <div className="login-form-container">
        <div className="card width-400">
          <div className="card-image">
            <figure className="image">
              <img src={background} alt="placeholder" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="is-size-4">Login</div>
            </div>

            <div className="content">
              <div className="field">
                <label htmlFor="name">
                  <div className="control has-icons-left has-icons-right">
                    <input onChange={(e) => handleChange(e)} placeholder="username" className="input" type="text" name="username" required />
                    <span className="icon is-small is-left">
                      icon
                    </span>
                    <span className="icon is-small is-right">
                      icon
                    </span>
                  </div>
                </label>
              </div>
              <div className="field">
                <label htmlFor="password">
                  <div className="control has-icons-left has-icons-right">
                    <input onChange={(e) => handleChange(e)} placeholder="password" className="input" type="password" name="password" required />
                    <span className="icon is-small is-left">
                      icon
                    </span>
                    <span className="icon is-small is-right">
                      icon
                    </span>
                  </div>
                </label>
                <div className="field padding-2-5">
                  <button className="button is-fullwidth is-success" type="button" onClick={(e) => handleSubmit(e)}>Login</button>
                  <h2>{error}</h2>
                </div>
              </div>
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
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
