import React from 'react';

const Sumary = ({ revenue, expenses, profit }) => (
  <div>
    <h1 className="sidebar__content-title">Mon Compte</h1>
    <div className="sidebar__content-benefit">
      <div className="benefit-card">
        <span className="benefit-card__symbol">€</span>
        <span className="benefit-card__number">{revenue}</span>
        <p className="benefit-card__info">Recette</p>
      </div>
      <div className="benefit-card">
        <span className="benefit-card__symbol">€</span>
        <span className="benefit-card__number">{expenses}</span>
        <p className="benefit-card__info">Charges</p>
      </div>
      <div className="benefit-card">
        <span className="benefit-card__symbol">€</span>
        <span className="benefit-card__number">{profit}</span>
        <p className="benefit-card__info">Bénéfice</p>
      </div>
    </div>
  </div>
);

// revenue={revenue} expenses={expenses} profit={profit}

export default Sumary;
