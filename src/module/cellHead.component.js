import React, { Component } from 'react';

class CellHead extends Component {
  render() {
    let addLine;
    return (
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Libellé</th>
          <th>Moyen de paiement</th>
          <th>Règlement</th>
          <th><a href='#' onClick={addLine}>+</a></th>
        </tr>
      </thead>
    );
  }
};

export default CellHead;
