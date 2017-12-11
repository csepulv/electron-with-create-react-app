import React, { Component } from 'react';
import _ from 'lodash';

import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';

import EditCell from './editCell.component';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false};
    this.openModal = this.open;
  }

  close = () =>  {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }
  renderLine = row => (
    <tr keys={row.keys}>
      <td>{row.keys}</td>
      <td>{row.date}</td>
      <td>{row.type}</td>
      <td>{row.meansPayment}</td>
      <td>{row.payment}</td>
      <td><Button onClick={this.openModal}>Editer</Button></td>
    </tr>
  )

  render() {
    const { row, editLineAction } = this.props;
    return (
      <tbody>
        {_.map(row, this.renderLine)}
        <Modal show={this.state.showModal} onHide={this.close}><EditCell editLineAction={editLineAction} /></Modal>
      </tbody>
    );
  }
};

export default Cell;
