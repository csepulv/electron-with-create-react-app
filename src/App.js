import React from 'react';

import Menu from './container/menu/menu.component';
import AccountContainer from './container/account/account.connector';

import './App.css';
import './bootstrap.css';
import './bootstrap-theme.css';

const App = () => (
  <div className="App">
    <Menu />
    <AccountContainer />
  </div>
);

export default App;
