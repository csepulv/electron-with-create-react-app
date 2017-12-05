import React, { Component } from 'react';
import Table from 'react-bootstrap/lib/Table';

import Cell from './cell.component';
import CellHead from './cellHead.component';

const List = ({row}) => (
  <Table striped bordered condensed hover>
    <CellHead />
    <Cell row={row} />
  </Table>
);

export default List;
