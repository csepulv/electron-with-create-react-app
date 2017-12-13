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

class EditRow extends Component {
  render() {
    const { currentRow } = this.props;
    const currentDate = moment().format('YYYY-MM-DD');
    const defaultCheckedCard = currentRow.meansPayment === 'CB' ? this.state.chkbox = true: '' ;
    const defaultCheckedPaper = currentRow.meansPayment === 'Chèque' ? this.state.chkbox = true: '' ;
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
              value={currentRow.date || currentDate}
              onChange={() =>{}}
            />
          </FormGroup>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Date</ControlLabel>
            <FormControl
              type="date"
              value={currentRow.name || ''}
              onChange={() =>{}}
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
              value={ currentRow.payment || null }
              onChange={() =>{}}
            />
          </FormGroup>
          <Button onClick={() => this.props.saveLine(this.props.currentRow)}>Valider</Button>
        </form>
       </Modal.Body>
     </div>
    );
  }
};


EditRow.propTypes = {
  currentRow: PropTypes.object.isRequired,
};

export default EditRow;
