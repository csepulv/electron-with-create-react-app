import React, { Component } from 'react';
import PropTypes from 'prop-types';

import More from '../icons/more.svg';
import './row-head.css';

class RowHead extends Component {
  addNewLine = () =>  {
    this.props.openModalAction();
  }

  render() {
    return (
      <thead>
        <tr className="row-head__container">
          <th className="row-head__item">Date</th>
          <th className="row-head__item">Patient</th>
          <th className="row-head__item">Libellé</th>
          <th className="row-head__item">Moyen de paiement</th>
          <th className="row-head__item">Règlement</th>
          <th className="row-head__item" colSpan="2">
            <a href='#' onClick={this.addNewLine}>
              <img className="icons" src={More} alt='Add'/>
            </a>
          </th>
        </tr>
      </thead>
    );
  }
};

RowHead.propTypes = {
  openModalAction: PropTypes.func.isRequired,
};

export default RowHead;
