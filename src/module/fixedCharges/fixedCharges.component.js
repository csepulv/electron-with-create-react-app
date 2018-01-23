import React from 'react';
import { map } from 'lodash';

import config from '../../utils/config.json';
import './fixed-charges.css';

const FixedCharges = () => (
  <div className="fixed-charges">
    <h3 className="fixed-charges__title">Charge fix</h3>
    <ul className="fixed-charges__list">
      {map(config, (key, value) => (
        <li key={key} className="fixed-charges__list-item">
          <span>{value}</span>: {key}%
        </li>
      ))}
    </ul>
  </div>
);

export default FixedCharges;
