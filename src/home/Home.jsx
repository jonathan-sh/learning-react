import React from 'react';
import logo from './me.svg';
import './Home.css';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img data-testid="logo" src={logo} className="App-logo" a="b" alt="logo" />
        <br />
        <p>
          learning react :)
        </p>
        <Link to="/login">
          <Button variant="contained" color="primary"> login </Button>
        </Link>
      </header>
    </div>
  );
}

export default App;
