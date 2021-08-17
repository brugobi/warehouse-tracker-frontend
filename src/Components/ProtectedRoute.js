import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../Actions/index';
const ProtectedRoute = ({ component: Component }) => {
  const dispatch = useDispatch()
  let username = localStorage.getItem('username');
  useEffect(() => {
    console.log(username)
    if (username) {
      dispatch(logIn(username))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    < Route
      render={() => {
        if (username) {
          console.log(username)
          return (<Component />)
        }
        return <Redirect to='/Login' />
      }}
    />
  )
};
export default ProtectedRoute;
