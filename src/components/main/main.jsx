import React from 'react';
import Header from '../header/header'

const Main = () => {
  return (
    <div>
        <Header/>
      <h1 style={{ color: 'blue', textAlign: 'center' }}>Welcome to the Main Page</h1>
      <p>This is the page after login.</p>
    </div>
  );
};

export default Main;
