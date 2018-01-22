import React, { Component } from 'react';

import Modal from 'react-bootstrap/lib/Modal';

class CustomModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: true,
    };
  }

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  render() {
    const { modalOpen } = this.state;

    return (
      <Modal show={modalOpen} onHide={this.toggleModal}>
        {modalOpen && this.props.children}
      </Modal>
    );
  }
}

export default CustomModal;
