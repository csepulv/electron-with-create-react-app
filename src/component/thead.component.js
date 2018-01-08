import React from 'react';
import PropTypes from 'prop-types';

import More from '../icons/more.svg';
import './row-head.css';

const Thead = ({ createConsultation }) => (
  <thead>
    <tr className="row-head__container">
      <th className="row-head__item">Date</th>
      <th className="row-head__item">Patient</th>
      <th className="row-head__item">Consulation</th>
      <th className="row-head__item">Moyen de paiement</th>
      <th className="row-head__item">Règlement</th>
      <th className="row-head__item" colSpan="2">
        <button onClick={createConsultation}>
          <img className="icons" src={More} alt="Add" />
        </button>
      </th>
    </tr>
  </thead>
);

Thead.propTypes = {
  createConsultation: PropTypes.func.isRequired,
};

export default Thead;
