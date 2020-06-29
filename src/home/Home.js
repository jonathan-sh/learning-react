import React from 'react';
import logo from './me.svg';
import './Home.css';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img data-testid="logo" src={logo} className="App-logo" a="b" alt="logo" />
        <br/>
        <p>
          learning react :)
        </p>
        <Button variant="contained" color="primary"> material ui </Button>
      </header>      
    </div>
  );
}

export default App;
