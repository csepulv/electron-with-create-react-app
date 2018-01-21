import React from 'react';
import PropTypes from 'prop-types';

import SideBar from '../../container/sideBar.component';
// import Home from '../../container/home.connector';

import Consultations from '../consultations/consultations.component';
// <Home />

const AccountComponent = ({ revenue, expenses, profit, consultations }) => (
  <div className="App-content">
    <SideBar revenue={revenue} expenses={expenses} profit={profit} />
    <Consultations consultations={consultations} />
  </div>
);

AccountComponent.propTypes = {
  consultations: PropTypes.array.isRequired,
  revenue: PropTypes.number.isRequired,
  charges: PropTypes.object.isRequired,
  expenses: PropTypes.number.isRequired,
  profit: PropTypes.number.isRequired,
};

export default AccountComponent;
