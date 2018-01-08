import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

class SideBarResponsability extends Component {
  constructor(props) {
    super(props);

    let { responsability } = this.props;

    if (!responsability.id) {
      responsability = {
        rent: '300',
        coverage: '0',
      };
    }

    this.state = { responsability };
  }

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    const { responsability } = this.state;

    responsability[name] = value;

    this.setState({ responsability });
  };

  handleSubmit = () => {
    const { createResponsabilitydAction } = this.props;
    const { responsability } = this.state;

    createResponsabilitydAction(responsability);
  };

  render() {
    const { responsability } = this.state;

    return (
      <div>
        <h1 className="sidebar__content-title">Mes Charges</h1>
        <div className="sidebar__content-form">
          <FormGroup controlId="formBasicText" className="form-sidebar">
            <ControlLabel className="form-label">Loyer</ControlLabel>
            <FormControl
              type="number"
              min="0"
              name="rent"
              className="form-input"
              value={responsability.rent}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup controlId="formBasicText" className="form-sidebar">
            <ControlLabel className="form-label">Assurance</ControlLabel>
            <FormControl
              type="number"
              min="0"
              name="coverage"
              className="form-input"
              value={responsability.coverage}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <button className="form-button" onClick={this.handleSubmit}>
            Valider
          </button>
        </div>
      </div>
    );
  }
}

SideBarResponsability.defaultProps = {
  responsability: {
    rent: '300',
    coverage: '0',
  },
};

SideBarResponsability.propTypes = {
  createResponsabilitydAction: PropTypes.func.isRequired,
  // eslint-disable-next-line
  responsability: PropTypes.object,
};

export default SideBarResponsability;
