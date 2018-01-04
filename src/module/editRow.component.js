import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import Modal from 'react-bootstrap/lib/Modal';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

class EditRow extends Component {
  constructor(props) {
    super(props);

    let { consultation } = this.props;

    if (!consultation.id) {
      consultation = {
        date: moment().format('YYYY-MM-DD'),
        name: '',
        payment: '',
      };
    }

    this.state = { consultation };
  }

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    const { consultation } = this.state;

    consultation[name] = value;

    this.setState({ consultation });
  };

  handleSubmit = () => {
    const { createConsultationAction, updateConsultationAction, toggleModal } = this.props;
    const { consultation } = this.state;

    if (consultation.id) {
      updateConsultationAction(consultation);
      toggleModal();

      return;
    }

    createConsultationAction(consultation);
    toggleModal();
  };

  render() {
    const { consultation } = this.state;

    return (
      <div>
        <Modal.Header closeButton>
          <Modal.Title>Edition: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Date</ControlLabel>
              <FormControl type="date" name="date" value={consultation.date} onChange={this.handleInputChange} />
            </FormGroup>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Patient</ControlLabel>
              <FormControl type="text" name="name" value={consultation.name} onChange={this.handleInputChange} />
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Libellé</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder="select"
                name="type"
                onChange={this.handleInputChange}
                value={consultation.libelle}
              >
                <option value="Enfant">Enfants</option>
                <option value="Adultes">Adultes</option>
                <option value="Couple">Couple</option>
              </FormControl>
            </FormGroup>
            <ControlLabel>Moyen de Paiment</ControlLabel>
            <FormGroup>
              <FormControl
                componentClass="select"
                placeholder="select"
                name="meansPayment"
                onChange={this.handleInputChange}
                value={consultation.payment}
              >
                <option value="Cheque">Chèque</option>
                <option value="Liquide">Liquide</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Règlement</ControlLabel>
              <FormControl
                type="number"
                min="0"
                name="payment"
                value={consultation.payment}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <Button onClick={this.handleSubmit}>Valider</Button>
          </form>
        </Modal.Body>
      </div>
    );
  }
}

EditRow.defaultProps = {
  consultation: {
    date: moment().format('YYYY-MM-DD'),
    name: '',
    payment: '',
  },
};

EditRow.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  createConsultationAction: PropTypes.func.isRequired,
  updateConsultationAction: PropTypes.func.isRequired,
  // eslint-disable-next-line
  consultation: PropTypes.object,
};

export default EditRow;
