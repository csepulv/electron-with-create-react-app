import React, { Component } from 'react';
import PropTypes from 'prop-types';

import More from '../icons/more.svg';
import './cell-head.css';

class RowHead extends Component {
  addNewLine = () =>  {
    this.props.addLineAction();
  }

  render() {
    return (
      <thead>
        <tr className="cell-head__container">
          <th className="cell-head__item">Date</th>
          <th className="cell-head__item">Patient</th>
          <th className="cell-head__item">Libellé</th>
          <th className="cell-head__item">Moyen de paiement</th>
          <th className="cell-head__item">Règlement</th>
          <th className="cell-head__item" colSpan="2">
            <a href='#' onClick={this.addNewLine}>
              <img className="icons" src={More} />
            </a>
          </th>
        </tr>
      </thead>
    );
  }
};

RowHead.propTypes = {
  addLineAction: PropTypes.func.isRequired,
};

export default RowHead;
