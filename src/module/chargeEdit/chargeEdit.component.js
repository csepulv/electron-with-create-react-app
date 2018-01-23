import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/lib/Modal';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

class ChargeEdit extends Component {
  constructor(props) {
    super(props);
    let { charge } = this.props;

    if (!charge.id) {
      charge = {
        name: '',
        price: '0',
      };
    }

    this.state = { charge };
  }

  componentWillReceiveProps(nextProps) {
    const { charge } = nextProps;

    if (charge.id) {
      this.setState({ charge });
    }
  }

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    const { charge } = this.state;

    charge[name] = value;

    this.setState({ charge });
  };

  handleSubmit = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const { createChargeAction, updateChargeAction, toggleModal } = this.props;
    const { charge } = this.state;

    if (charge.id) {
      updateChargeAction(charge);
      toggleModal();

      return;
    }

    createChargeAction({ ...charge, month: currentMonth, year: currentYear });
    toggleModal();
  };

  render() {
    const { charge } = this.state;

    return (
      <Modal show={this.props.open} onHide={this.props.toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Charge: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Charges</ControlLabel>
              <FormControl type="text" name="name" value={charge.name} onChange={this.handleInputChange} />
            </FormGroup>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Prix</ControlLabel>
              <FormControl type="number" min="0" name="price" value={charge.price} onChange={this.handleInputChange} />
            </FormGroup>
            <Button onClick={this.handleSubmit}>Valider</Button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}

ChargeEdit.defaultProps = {
  charge: {
    name: '',
    price: '0',
  },
};

ChargeEdit.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  createChargeAction: PropTypes.func.isRequired,
  updateChargeAction: PropTypes.func.isRequired,
  charge: PropTypes.object,
};

export default ChargeEdit;
