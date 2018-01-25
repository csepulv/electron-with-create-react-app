import React from 'react';

import { cfe, impot, social } from '../../utils/config';
import './fixed-charges.css';

const FixedCharges = () => (
  <div className="fixed-charges">
    <h3 className="fixed-charges__title">Charge fix</h3>
    <ul className="fixed-charges__list">
      <li className="fixed-charges__list-item">
        <span>CFE</span>: {cfe}%
      </li>
      <li className="fixed-charges__list-item">
        <span>Impot</span>: {impot}%
      </li>
      <li className="fixed-charges__list-item">
        <span>Social</span>: {social}%
      </li>
    </ul>
  </div>
);

export default FixedCharges;
