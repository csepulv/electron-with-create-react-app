import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';

import Table from 'react-bootstrap/lib/Table';
import Tbody from '../component/tbody.connector';
import Thead from '../component/thead.component';
import EditRow from '../module/editRow.connector';
import './list.css';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      modalContent: {},
    };
  }

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
      modalContent: {},
    });
  };

  createConsultation = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
      modalContent: {},
    });
  };

  editConsultation = id => {
    this.setState({
      modalOpen: !this.state.modalOpen,
      modalContent: this.props.consultations[id],
    });
  };

  render() {
    const { consultations, filter } = this.props;
    const { modalOpen, modalContent } = this.state;

    return (
      <div className="list">
        <Table striped bordered condensed hover>
          <Thead createConsultation={this.createConsultation} />
          <Tbody consultations={consultations} editConsultation={this.editConsultation} filter={filter} />
        </Table>

        <Modal show={modalOpen} onHide={this.toggleModal}>
          {modalOpen && <EditRow consultation={modalContent} toggleModal={this.toggleModal} />}
        </Modal>
      </div>
    );
  }
}

List.propTypes = {
  // eslint-disable-next-line
  consultations: PropTypes.object.isRequired,
  // eslint-disable-next-line
  filter: PropTypes.object,
};

export default List;
