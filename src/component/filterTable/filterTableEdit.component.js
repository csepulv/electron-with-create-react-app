import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/lib/Modal';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

class FilterTable extends Component {
  constructor(props) {
    super(props);

    const { filtering } = this.props;

    this.state = { filtering };
  }

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    const { filtering } = this.state;

    filtering[name] = value;

    this.setState({ filtering });
  };

  handleSubmit = () => {
    const { createFilterTableAction, toggleModal } = this.props;
    const { filtering } = this.state;

    createFilterTableAction(filtering);
    toggleModal();
  };

  render() {
    const { filtering } = this.props;

    return (
      <div>
        <Modal.Header closeButton>
          <Modal.Title>Filter: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Mois:</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder="select"
                name="month"
                key={filtering.month}
                onChange={this.handleInputChange}
                value={filtering.month}
              >
                <option value="0">Janvier</option>
                <option value="1">Février</option>
                <option value="2">Mars</option>
                <option value="3">Avril</option>
                <option value="4">Mai</option>
                <option value="5">Juin</option>
                <option value="6">Juillet</option>
                <option value="7">Août</option>
                <option value="8">Septembre</option>
                <option value="9">Octobre</option>
                <option value="10">Novembre</option>
                <option value="11">Décembre</option>
              </FormControl>
            </FormGroup>

            <FormGroup controlId="formBasicText">
              <ControlLabel>Année :</ControlLabel>
              <FormControl type="number" name="year" value={filtering.year} onChange={this.handleInputChange} />
            </FormGroup>
            <Button onClick={this.handleSubmit}>Filtrer</Button>
          </form>
        </Modal.Body>
      </div>
    );
  }
}

FilterTable.defaultProps = {
  filtering: {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  },
};

FilterTable.propTypes = {
  // eslint-disable-next-line
  filtering: PropTypes.object,
  createFilterTableAction: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default FilterTable;
