import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Table from 'react-bootstrap/lib/Table';
import Header from '../grid/header.component';
import Body from '../grid/body.component';

import { reduce } from 'lodash';

class Consultations extends Component {
  render() {
    // const { consultations } = this.props;
    // Transform to array avec id en key
    // reduce(this.props.consultations, (result, value, key) => {})

    const headers = ['Date', 'Patient', 'Consulation', 'Moyen de paiement', 'Règlement'];
    const consultations = [];
    const headerAction = () => {};
    const editAction = () => {};
    const deleteAction = () => {};

    return (
      <div className="list">
        <Table striped bordered condensed hover>
          <Header headers={headers} headerAction={headerAction} />
          <Body rows={consultations} editAction={editAction} deleteAction={deleteAction} />
        </Table>
      </div>
    );
  }
}

Consultations.propTypes = {
  consultations: PropTypes.array.isRequired,
};

// <Tbody consultations={consultations} editConsultation={this.editConsultation} filter={filter} />

export default Consultations;
