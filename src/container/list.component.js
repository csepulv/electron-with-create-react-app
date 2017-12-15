import React from 'react';
import PropTypes from 'prop-types';

import Table from 'react-bootstrap/lib/Table';
import Row from '../component/row.connector';
import RowHead from '../component/rowHead.connector';
import Modal from 'react-bootstrap/lib/Modal';
import EditRow from '../module/editRow.connector'


const List = ({ row, modal, closeModalAction }) => (
  <div>
    <Table striped bordered condensed hover>
      <RowHead />
      <Row row={row} />
    </Table>
    <Modal show={modal} onHide={closeModalAction}>
      <EditRow />
    </Modal>
  </div>
);

List.propTypes = {
  row: PropTypes.array.isRequired,
  modal: PropTypes.bool,
  closeModalAction: PropTypes.func.isRequired,
};

export default List;
