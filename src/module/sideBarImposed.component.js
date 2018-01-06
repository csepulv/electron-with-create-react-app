import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';

class SideBarImposed extends Component {
  constructor(props) {
    super(props);

    let { imposed } = this.props;

    if (!imposed.id) {
      imposed = {
        bothTaxation: '5.7',
        // ça ne changera jamais
        contribution: '0.2',
      };
    }

    this.state = { imposed };
  }

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    const { imposed } = this.state;

    imposed[name] = value;

    this.setState({ imposed });
  };

  handleSubmit = () => {
    const { createImposedAction } = this.props;
    const { imposed } = this.state;

    createImposedAction(imposed);
  };

  render() {
    const { imposed } = this.state;

    return (
      <div>
        <h1 className="sidebar__content-title">Mes Charges</h1>
        <div className="sidebar__content-form">
          <FormGroup controlId="formBasicText">
            <ControlLabel>Cotisation Sociale</ControlLabel>
            <FormControl
              type="number"
              min="0"
              name="bothTaxation"
              value={imposed.bothTaxation}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Cotisation CFP</ControlLabel>
            <FormControl
              type="number"
              min="0"
              name="contribution"
              value={imposed.contribution}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit}>Valider</Button>
        </div>

        <div className="sidebar__content-imposed">
          <div className="imposed-card">
            <span className="imposed-card__symbol">€</span>
            <span className="imposed-card__number">bolo</span>
            <p className="imposed-card__info">Bénéfice Imposable</p>
          </div>

          <div className="imposed-card">
            <span className="imposed-card__symbol">€</span>
            <span className="imposed-card__number">gnaise</span>
            <p className="imposed-card__info">Bénéfice total</p>
          </div>
        </div>
      </div>
    );
  }
}

SideBarImposed.defaultProps = {
  imposed: {
    bothTaxation: '5.7',
    contribution: '0.2',
  },
};

SideBarImposed.propTypes = {
  createImposedAction: PropTypes.func.isRequired,
  // eslint-disable-next-line
  imposed: PropTypes.object,
};

export default SideBarImposed;
