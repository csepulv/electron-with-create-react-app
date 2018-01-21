import React from 'react';
import Header from './container/header.component';

import AccountContainer from './module/account/account.connector';

import './App.css';
import './bootstrap.css';
import './bootstrap-theme.css';
import './icons.css';

const App = () => (
  <div className="App">
    <Header />
    <AccountContainer />
  </div>
);

export default App;
