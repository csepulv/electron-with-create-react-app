import React from 'react';
import PropTypes from 'prop-types';

import { forEach } from 'lodash';

import Table from 'react-bootstrap/lib/Table';
import Header from '../grid/header.component';
import Body from '../grid/body.component';

const Consultations = ({ consultations, createAction, editAction, deleteAction }) => {
  const rows = [];

  forEach(consultations, consultation => {
    const buildedConsultation = [];

    buildedConsultation.push(consultation.date);
    buildedConsultation.push(consultation.name);
    buildedConsultation.push(consultation.type);
    buildedConsultation.push(consultation.meansPayment);
    buildedConsultation.push(consultation.payment);

    rows[consultation.id] = buildedConsultation;
  });

  const headers = ['Date', 'Patient', 'Consulation', 'Moyen de paiement', 'Règlement'];

  return (
    <div className="list">
      <Table striped bordered condensed hover>
        <Header headers={headers} headerAction={createAction} />
        <Body rows={rows} editAction={editAction} deleteAction={deleteAction} />
      </Table>
    </div>
  );
};

Consultations.propTypes = {
  consultations: PropTypes.array.isRequired,
  createAction: PropTypes.func.isRequired,
  editAction: PropTypes.func.isRequired,
  deleteAction: PropTypes.func.isRequired,
};

export default Consultations;
