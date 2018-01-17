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
          <button onClick={() => this.props.editConsultation(consultation.id)}>
            <img className="icons" src={Edit} alt="edit" />
          </button>
        </td>
        <td>
          <button onClick={() => this.props.deleteConsultationAction(consultation.id)}>
            <img className="icons" src={Remove} alt="remove" />
          </button>
        </td>
      </tr>
    );
  };

  render() {
    const { consultations, filter } = this.props;
    const renderConsultation = _.map(
      _.filter(consultations, consultation => {
        const consultationDate = consultation.month;

        if (consultationDate === _.parseInt(filter.month)) {
          return consultation;
        }

        return null;
      }),
      this.renderLine,
    );

    return <tbody>{renderConsultation}</tbody>;
  }
}

Tbody.propTypes = {
  // eslint-disable-next-line
  consultations: PropTypes.object.isRequired,
  // eslint-disable-next-line
  filter: PropTypes.object,
  editConsultation: PropTypes.func.isRequired,
  deleteConsultationAction: PropTypes.func.isRequired,
};

export default Tbody;
