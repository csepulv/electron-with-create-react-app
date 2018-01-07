import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './benefit.css';

class SideBarBenefit extends Component {
  getTaxableTurnOver = () => {
    const { taxableBenefit, imposed, responsability } = this.props;
    const getRent = responsability && responsability.rent;
    const getCoverage = responsability && responsability.coverage;

    const GetResponsabilty = _.parseInt(getRent) + _.parseInt(getCoverage);

    const getBothTaxation = imposed && imposed.bothTaxation;
    const getContribution = imposed && imposed.contribution;

    const substractTaxation = taxableBenefit - taxableBenefit * (_.parseInt(getBothTaxation) / 100);
    const substractContribution = substractTaxation - substractTaxation * (_.parseInt(getContribution) / 100);

    const result = Math.round(substractContribution - GetResponsabilty);

    return result;
  };

  getoveralTurnOver = () => {
    const { overallBenefit, imposed, responsability } = this.props;
    const getRent = responsability && responsability.rent;
    const getCoverage = responsability && responsability.coverage;

    const GetResponsabilty = _.parseInt(getRent) + _.parseInt(getCoverage);

    const getBothTaxation = imposed && imposed.bothTaxation;
    const getContribution = imposed && imposed.contribution;

    const substractTaxation = overallBenefit - overallBenefit * (_.parseInt(getBothTaxation) / 100);
    const substractContribution = substractTaxation - substractTaxation * (_.parseInt(getContribution) / 100);

    const result = Math.round(substractContribution - GetResponsabilty);

    return result;
  };

  render() {
    return (
      <div>
        <h1 className="sidebar__content-title">Mon Compte</h1>
        <div className="sidebar__content-benefit">
          <div className="benefit-card">
            <span className="benefit-card__symbol">€</span>
            <span className="benefit-card__number">{this.getTaxableTurnOver()}</span>
            <p className="benefit-card__info">Bénéfice Imposable</p>
          </div>
          <div className="benefit-card">
            <span className="benefit-card__symbol">€</span>
            <span className="benefit-card__number">{this.getoveralTurnOver()}</span>
            <p className="benefit-card__info">Bénéfice total</p>
          </div>
        </div>
      </div>
    );
  }
}
SideBarBenefit.propTypes = {
  overallBenefit: PropTypes.number.isRequired,
  taxableBenefit: PropTypes.number.isRequired,
};

export default SideBarBenefit;
