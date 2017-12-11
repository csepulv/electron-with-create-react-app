import React, { Component } from 'react';
import Table from 'react-bootstrap/lib/Table';

import Cell from './cell.component';
import CellHead from './cellHead.component';

const List = ({ row, addLineAction, editLineAction }) => (
  <Table striped bordered condensed hover>
    <CellHead addLineAction={addLineAction} />
    <Cell row={row} editLineAction={editLineAction} />
  </Table>
);

export default List;
