import React, { Component } from 'react';
import _ from 'lodash';

const renderLine = row => (
  <tr keys={row.keys}>
    <td>{row.keys}</td>
    <td>{row.date}</td>
    <td>{row.type}</td>
    <td>{row.meansPayment}</td>
    <td>{row.payment}</td>
  </tr>
);

class Cell extends Component {
  render() {
    const { row } = this.props;
    return (
      <tbody>
        {_.map(row, renderLine)}
      </tbody>
    );
  }
};

export default Cell;
