import React, { Component } from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import Edit from '../icons/edit.svg';
import Remove from '../icons/basket.svg';

class Tbody extends Component {
  renderLine = consultation => {
    if (!consultation) {
      return null;
    }

    return (
      <tr key={`${consultation.id}-${consultation.date}`}>
        <td>{consultation.date}</td>
        <td>{consultation.name}</td>
        <td>{consultation.type}</td>
        <td>{consultation.meansPayment}</td>
        <td>{consultation.payment}</td>
        <td>
          <a href="#" onClick={() => this.props.editConsultation(consultation.id)}>
            <img className="icons" src={Edit} alt="edit" />
          </a>
        </td>
        <td>
          <a href="#" onClick={() => this.props.deleteConsultationAction(consultation.id)}>
            <img className="icons" src={Remove} alt="remove" />
          </a>
        </td>
      </tr>
    );
  };

  render() {
    const { consultations } = this.props;

    return <tbody>{_.map(consultations, this.renderLine)}</tbody>;
  }
}

Tbody.propTypes = {
  consultations: PropTypes.object.isRequired,
  editConsultation: PropTypes.func.isRequired,
  deleteConsultationAction: PropTypes.func.isRequired,
};

export default Tbody;
