import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { filter, parseInt } from 'lodash';

import { getRevenue, getExpenses } from '../../utils/algorithm.utils';
import AccountComponent from './account.component';

class AccountContainer extends Component {
  componentDidMount() {
    this.props.loadConsultationsAction();
    this.props.loadChargesAction();
    this.props.loadFilterTableAction();
  }

  prepareConsultation() {
    const { consultations, filtering } = this.props;

    return filter(consultations, consultation => {
      const { month, year } = consultation;

      if (month === parseInt(filtering.month) && year === parseInt(filtering.year)) {
        return consultation;
      }

      return null;
    });
  }

  prepareCharge() {
    const { charges, filtering } = this.props;

    return filter(charges, charge => {
      const { month, year } = charge;

      if (month === parseInt(filtering.month) && year === parseInt(filtering.year)) {
        return charge;
      }

      return null;
    });
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
  charges: PropTypes.object.isRequired,
  filtering: PropTypes.object.isRequired,
  loadConsultationsAction: PropTypes.func.isRequired,
  loadChargesAction: PropTypes.func.isRequired,
  loadFilterTableAction: PropTypes.func.isRequired,
};

export default AccountContainer;
