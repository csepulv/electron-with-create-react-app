import React, { Component } from 'react';
import moment from 'moment';
import Modal from 'react-bootstrap/lib/Modal';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';

import _ from 'lodash';

class EditCell extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    // this.props.dispatch.editLineAction;
    this.setState({ value: e.target.value });
  }

  render() {
    const { row } = this.props;
    const currentDate = moment().format('L');
    console.log('###',  row);
    return (
      <div>
       <Modal.Header closeButton>
         <Modal.Title>Edition: </Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <form>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>Date</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder={currentDate}
              onChange={this.handleChange}
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
            <Checkbox inline> CB </Checkbox>
            <Checkbox inline>Chèque</Checkbox>
          </FormGroup>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>Règlement</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder=""
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit"> Valider</Button>
        </form>
       </Modal.Body>
     </div>
    );
  }
};

export default EditCell;
