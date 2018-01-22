import React from 'react';
import PropTypes from 'prop-types';

import { forEach } from 'lodash';

import Table from 'react-bootstrap/lib/Table';
import Header from '../grid/header.component';
import Body from '../grid/body.component';

import '../list.css';

const Charges = ({ createAction, editAction, deleteAction, charges }) => {
  const rows = [];
  forEach(charges, charge => {
    const buildedCharge = [];

    buildedCharge.push(charge.name);
    buildedCharge.push(charge.price);
    buildedCharge.push(charge.type);

    rows[charge.id] = buildedCharge;
  });

  const headers = ['Charges', 'Prix', 'Type'];

  return (
    <div className="list list__charges">
      <Table striped bordered condensed hover>
        <Header headers={headers} headerAction={createAction} />
        <Body rows={rows} editAction={editAction} deleteAction={deleteAction} />
      </Table>
    </div>
  );
};

Charges.propTypes = {
  createAction: PropTypes.func.isRequired,
  editAction: PropTypes.func.isRequired,
  deleteAction: PropTypes.func.isRequired,
  charges: PropTypes.array.isRequired,
};

export default Charges;
