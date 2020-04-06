import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './Button';

const {app} = window.require('electron').remote;

const App = () => {
  const handleClick = (ev) => {
    console.log('click button');
    console.log(ev);
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React + Electron = <span role="img" aria-label="love">😍</span>!!</h2>
      </div>
      <p className="App-intro">
        <b> Release 0.2.7 </b>
        Version: {app.getVersion()}
      </p>
      <Button text="hello React" onClick={handleClick}/>
    </div>
  );
};

export default App;
