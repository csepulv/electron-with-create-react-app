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
  componentDidMount() {
    this.props.loadConsultationsAction();
  }

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

    return (
      <AccountComponent
        revenue={revenue}
        expenses={expenses}
        profit={profit}
        consultations={consultations}
        charges={charges}
      />
    );
  }
}

AccountContainer.propTypes = {
  consultations: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  loadConsultationsAction: PropTypes.func.isRequired,
};

export default AccountContainer;
