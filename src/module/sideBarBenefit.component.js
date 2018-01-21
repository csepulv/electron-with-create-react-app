import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './benefit.css';

const subPoucent = (a, b) => {
  if (b === 0) {
    return 0;
  }

  return a - a * (b / 100);
};

const precisionRound = (number, precision) => {
  const factor = Math.pow(10, precision);

  return Math.round(number * factor) / factor;
};

class SideBarBenefit extends Component {
  getTaxableTurnOver = () => {
    const { taxableBenefit, imposed, responsability } = this.props;

    const rent = parseFloat(_.get(responsability, 'rent', 0));
    const coverage = parseFloat(_.get(responsability, 'coverage', 0));

    const GetResponsabilty = rent + coverage;

    const bothTaxation = parseFloat(_.get(imposed, 'bothTaxation', 0));
    const contribution = parseFloat(_.get(imposed, 'contribution', 0));

    const substractTaxation = subPoucent(taxableBenefit, bothTaxation);
    const substractContribution = subPoucent(substractTaxation, contribution);

    const getResult = substractContribution - GetResponsabilty;

    return precisionRound(getResult, 2);
  };

  getoveralTurnOver = () => {
    const { overallBenefit, imposed, responsability } = this.props;

    const rent = parseFloat(_.get(responsability, 'rent', 0));
    const coverage = parseFloat(_.get(responsability, 'coverage', 0));

    const GetResponsabilty = rent + coverage;

    const getBothTaxation = parseFloat(_.get(imposed, 'bothTaxation', 0));
    const getContribution = parseFloat(_.get(imposed, 'contribution', 0));

    const substractTaxation = subPoucent(overallBenefit, getBothTaxation);
    const substractContribution = subPoucent(substractTaxation, getContribution);

    const getResult = substractContribution - GetResponsabilty;

    return precisionRound(getResult, 2);
  };

  render() {
    return (
      <div>
        <h1 className="sidebar__content-title">Mon Compte</h1>
        <div className="sidebar__content-benefit">
          <div className="benefit-card">
            <span className="benefit-card__symbol">€</span>
            <span className="benefit-card__number">'Non Défini'</span>
            <p className="benefit-card__info">Recette</p>
          </div>
          <div className="benefit-card">
            <span className="benefit-card__symbol">€</span>
            <span className="benefit-card__number">{this.getTaxableTurnOver() || 'Non Défini'}</span>
            <p className="benefit-card__info">Bénéfice Imposable</p>
          </div>
          <div className="benefit-card">
            <span className="benefit-card__symbol">€</span>
            <span className="benefit-card__number">{this.getoveralTurnOver() || 'Non Défini'}</span>
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
  // eslint-disable-next-line
  imposed: PropTypes.object,
  // eslint-disable-next-line
  responsability: PropTypes.object,
};

export default SideBarBenefit;
