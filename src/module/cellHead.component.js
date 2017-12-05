import React, { Component } from 'react';

class CellHead extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Libellé</th>
          <th>Moyen de paiement</th>
          <th>Règlement</th>
          <th>+</th>
        </tr>
      </thead>
    );
  }
};

export default CellHead;
