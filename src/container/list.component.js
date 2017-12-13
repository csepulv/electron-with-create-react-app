import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Table from 'react-bootstrap/lib/Table';
import Row from '../module/row.connector';
import TableHead from '../module/tableHead.component';

const List = ({ row, addLineAction, editLineAction }) => (
  <Table striped bordered condensed hover>
    <TableHead addLineAction={addLineAction} />
    <Row row={row} />
  </Table>
);

List.propTypes = {
  row: PropTypes.array.isRequired,
  addLineAction: PropTypes.func.isRequired,
};

export default List;
