import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './container/home.connector';

import './App.css';
import './bootstrap.css';
import './bootstrap-theme.css';
import './icons.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React/Electron</h2>
        </div>
        <Home />
      </div>
    );
  }
}

export default App;
