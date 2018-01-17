import React from 'react';
import Home from './container/home.connector';
import SideBar from './container/sideBar.component';
import Header from './container/header.component';

import './App.css';
import './bootstrap.css';
import './bootstrap-theme.css';
import './icons.css';

const App = () => (
  <div className="App">
    <Header />
    <div className="App-content">
      <SideBar />
      <Home />
    </div>
  </div>
);

export default App;
