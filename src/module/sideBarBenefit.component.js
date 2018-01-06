import React from 'react';
import PropTypes from 'prop-types';

import './benefit.css';

const SideBarBenefit = ({ overallBenefit, taxableBenefit }) => (
  <div>
    <h1 className="sidebar__content-title">Mon Compte</h1>
    <div className="sidebar__content-benefit">
      <div className="benefit-card">
        <span className="benefit-card__symbol">€</span>
        <span className="benefit-card__number">{taxableBenefit}</span>
        <p className="benefit-card__info">Bénéfice Imposable</p>
      </div>
      <div className="benefit-card">
        <span className="benefit-card__symbol">€</span>
        <span className="benefit-card__number">{overallBenefit}</span>
        <p className="benefit-card__info">Bénéfice total</p>
      </div>
    </div>
  </div>
);

SideBarBenefit.propTypes = {
  overallBenefit: PropTypes.number.isRequired,
  taxableBenefit: PropTypes.number.isRequired,
};

export default SideBarBenefit;
