import React from 'react';
import PropTypes from 'prop-types';

import { map } from 'lodash';

import More from '../../icons/more.svg';
import '../../component/row-head.css';

const header = ({ headers, headerAction }) => (
  <thead>
    <tr className="row-head__container">
      {map(headers, label => (
        <th className="row-head__item" key={`header-${label}`}>
          {label}
        </th>
      ))}
      <th className="row-head__item" colSpan="2">
        <button onClick={headerAction}>
          <img className="icons" src={More} alt="Add" />
        </button>
      </th>
    </tr>
  </thead>
);

header.propTypes = {
  headers: PropTypes.array.isRequired,
  headerAction: PropTypes.func.isRequired,
};

export default header;
