import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { filter, parseInt, map } from 'lodash';

import AccountComponent from './account.component';

const sum = (accumulator, currentValue) => accumulator + parseInt(currentValue);

const getRevenue = consultations => {
  const payments = map(consultations, 'payment');

  return payments.reduce(sum, 0);
};

const getExpenses = charges => {
  const amounts = map(charges, 'amount');

  return amounts.reduce(sum, 0);
};

class AccountContainer extends Component {
  prepareConsultation() {
    const { consultations, filters } = this.props;

    return filter(consultations, consultation => {
      const { month, year } = consultation;

      if (month === parseInt(filters.month) && year === parseInt(filters.year)) {
        return consultation;
      }

      return null;
    });
  }

  prepareCharge() {
    // #TODO

    return {};
  }

  render() {
    const consultations = this.prepareConsultation();
    const revenue = getRevenue(consultations);

    const charges = this.prepareCharge();
    const expenses = getExpenses(charges);

    const profit = revenue - expenses;

    const props = {
      consultations,
      revenue,
      charges,
      expenses,
      profit,
    };

    return <AccountComponent {...props} />;
  }
}

AccountContainer.propTypes = {
  consultations: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
};

export default AccountContainer;
