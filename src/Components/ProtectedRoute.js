import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../Actions/index';

const ProtectedRoute = ({ component: Component }) => {
  const dispatch = useDispatch();
  const username = localStorage.getItem('username');
  useEffect(() => {
    console.log(username);
    if (username) {
      dispatch(logIn(JSON.parse(username)));
    }
  }, []);

  return (
    <Route
      render={() => {
        if (username) {
          // console.log(username);
          return (<Component />);
        }
        return <Redirect to="/Login" />;
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default ProtectedRoute;
