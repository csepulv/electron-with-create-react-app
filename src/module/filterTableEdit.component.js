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

    const { filter } = this.props;

    this.state = { filter };
  }

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    const { filter } = this.state;

    filter[name] = value;

    this.setState({ filter });
  };

  handleSubmit = () => {
    const { createFilterTableAction, toggleModal } = this.props;
    const { filter } = this.state;

    createFilterTableAction(filter);
    toggleModal();
  };

  render() {
    const { filter } = this.props;

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
                key={filter.month}
                onChange={this.handleInputChange}
                value={filter.month}
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
              <FormControl type="number" name="year" value={filter.year} onChange={this.handleInputChange} />
            </FormGroup>
            <Button onClick={this.handleSubmit}>Filtrer</Button>
          </form>
        </Modal.Body>
      </div>
    );
  }
}

FilterTable.defaultProps = {
  filter: {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  },
};

FilterTable.propTypes = {
  // eslint-disable-next-line
  filter: PropTypes.object,
  createFilterTableAction: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default FilterTable;
