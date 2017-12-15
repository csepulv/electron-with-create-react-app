import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import Modal from 'react-bootstrap/lib/Modal';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';

import _ from 'lodash';

const currentDate = moment().format('YYYY-MM-DD');

class EditRow extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      currentRow : {
        date: '',
        name: '',
        payment: '',
      }
    });
  }

  handleDateChange = event => {
    event.preventDefault();
    this.setState({
      date: event.target.value
    });
  }

  handleNameChange = event => {
    event.preventDefault();
    this.setState({
      name: event.target.value
    });
  }

  handlePaymentChange = event => {
    event.preventDefault();
    this.setState({
      payment: event.target.value
    });
  }

  handleSubmit = () => {
    //const { saveLineAction, currentRow, closeModalAction} = this.props;
    //console.log('####', currentRow);
    const { addLineAction, closeModalAction} = this.props;
    let currentRow = {
      name: this.state.name,
      date: this.state.date,
      payment: this.state.payment
    };
    addLineAction(currentRow);
    closeModalAction();
  }

  render() {
    const { currentRow } = this.props;
    const defaultCheckedCard = {}; //currentRow.meansPayment === 'CB' ? this.state.chkbox = true: '' ;
    const defaultCheckedPaper = {}; //currentRow.meansPayment === 'Chèque' ? this.state.chkbox = true: '' ;
    return (
      <div>
       <Modal.Header closeButton>
         <Modal.Title>Edition: </Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <form>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Date</ControlLabel>
            <FormControl
              type="date"
              name="date"
              value={currentRow.date || currentDate}
              onChange={this.handleDateChange}
            />
          </FormGroup>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Patient</ControlLabel>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </FormGroup>

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Libellé</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">Enfants</option>
              <option value="other">Adultes</option>
              <option value="other">Couple</option>
            </FormControl>
          </FormGroup>
          <ControlLabel>Moyen de Paiment</ControlLabel>
          <FormGroup>
            <Checkbox inline defaultChecked={defaultCheckedCard}>CB</Checkbox>
            <Checkbox inline defaultChecked={defaultCheckedPaper}>Chèque</Checkbox>
          </FormGroup>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Règlement</ControlLabel>
            <FormControl
              type="number"
              min="0"
              name="payment"
              value={ this.state.payment }
              onChange={this.handlePaymentChange}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit}>Valider</Button>
        </form>
       </Modal.Body>
     </div>
    );
  }
};


EditRow.propTypes = {
  currentRow: PropTypes.object.isRequired,
  addLineAction: PropTypes.func.isRequired,
  closeModalAction: PropTypes.func.isRequired,
};

export default EditRow;
