import React from 'react';
import Nav from './Nav';

const Home = () => {
  const username = localStorage.getItem('username')
  return (
    <div className="App">
      <Nav />
      <h1>Hello Bruna!</h1>
      <span>I am {username}</span>
    </div>
  );
}
export default Home;
