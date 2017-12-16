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
    let row = props.currentRow;
    if(_.isEmpty(props.currentRow)) {
      row = {
          date: moment().format('YYYY-MM-DD'),
          name: '',
          payment: '',
        };
    }

    this.state = row;
  }


  handleInputChange = event => {
    event.preventDefault();
    const {name, value}= event.target;
    this.setState({
      ...this.state,
      [name]: value,
    })
  }

  handleSubmit = () => {
    const { addLineAction, closeModalAction} = this.props;
    let currentRow = this.state;
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
              value={this.state.date}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Patient</ControlLabel>
            <FormControl
              type="text"
              name="name"
              value={ this.state.name }
              onChange={this.handleInputChange}
            />
          </FormGroup>

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Libellé</ControlLabel>
            <FormControl componentClass="select" placeholder="select" name="type" onChange={this.handleInputChange} value={this.state.libelle}>
              <option value="Enfant">Enfants</option>
              <option value="Adultes">Adultes</option>
              <option value="Couple">Couple</option>
            </FormControl>
          </FormGroup>
          <ControlLabel>Moyen de Paiment</ControlLabel>
          <FormGroup>
            <FormControl componentClass="select" placeholder="select" name="meansPayment" onChange={this.handleInputChange} value={this.state.payment}>
              <option value="Cheque">Chèque</option>
              <option value="Liquide">Liquide</option>
            </FormControl>
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
              onChange={this.handleInputChange}
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
