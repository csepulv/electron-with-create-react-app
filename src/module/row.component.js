import React, { Component } from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import Modal from 'react-bootstrap/lib/Modal';
import Edit from '../icons/edit.svg';
import Remove from '../icons/basket.svg';

import EditRow from './editRow.connector';

class Row extends Component {
  close = () =>  {
    this.props.closeModalAction();
  }

  open = row => {
    this.props.editLineAction(row)
    this.props.openModalAction();
  }

  renderLine = row => (
    <tr key={`${row.id}-${row.date}`}>
      <td>{row.date}</td>
      <td>{row.name}</td>
      <td>{row.type}</td>
      <td>{row.meansPayment}</td>
      <td>{row.payment}</td>
      <td><a href='#' onClick={() => this.open(row)}><img className="icons" src={Edit} /></a></td>
      <td><a href='#' onClick={() => this.props.removeRowAction(row.id)}><img className="icons" src={Remove} /></a></td>
    </tr>
  );

  render() {
    const { row, editLineAction } = this.props;
    return (
      <tbody>
        {_.map(row, this.renderLine)}
        <Modal show={this.props.modalState} onHide={this.close}><EditRow /></Modal>
      </tbody>
    );
  }
};

Row.propTypes = {
  row: PropTypes.array.isRequired,
  openModalAction: PropTypes.func.isRequired,
  closeModalAction: PropTypes.func.isRequired,
  editLineAction: PropTypes.func.isRequired,
  removeRowAction: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired,
};

export default Row;
