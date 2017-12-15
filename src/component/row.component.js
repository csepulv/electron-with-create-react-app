import React, { Component } from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import Edit from '../icons/edit.svg';
import Remove from '../icons/basket.svg';

class Row extends Component {
  open = row => {
    this.props.editLineAction(row);
    this.props.openModalAction();
  }

  renderLine = row => (
    <tr key={`${row.id}-${row.date}`}>
      <td>{row.date}</td>
      <td>{row.name}</td>
      <td>{row.type}</td>
      <td>{row.meansPayment}</td>
      <td>{row.payment}</td>
      <td><a href='#' onClick={() => this.open(row)}><img className="icons" src={Edit} alt='edit'/></a></td>
      <td><a href='#' onClick={() => this.props.removeRowAction(row.id)}><img className="icons" src={Remove} alt='remove'/></a></td>
    </tr>
  );

  render() {
    const { row } = this.props;
    return <tbody>{_.map(row, this.renderLine)}</tbody>;
  }
};

Row.propTypes = {
  row: PropTypes.array.isRequired,
  openModalAction: PropTypes.func.isRequired,
  editLineAction: PropTypes.func.isRequired,
  removeRowAction: PropTypes.func.isRequired,
};

export default Row;
