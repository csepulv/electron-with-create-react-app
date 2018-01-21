import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { forEach, map } from 'lodash';

import Edit from '../../icons/edit.svg';
import Remove from '../../icons/basket.svg';

class Body extends Component {
  renderLine = (row, id) => {
    if (!row) {
      return null;
    }

    return (
      <tr key={id}>
        {map(row, data => <td>{data}</td>)}

        <td>
          <button onClick={() => this.props.editAction(id)}>
            <img className="icons" src={Edit} alt="edit" />
          </button>
        </td>
        <td>
          <button onClick={() => this.props.deleteAction(id)}>
            <img className="icons" src={Remove} alt="remove" />
          </button>
        </td>
      </tr>
    );
  };

  render() {
    return <tbody>{forEach(this.props.rows, this.renderLine)}</tbody>;
  }
}

Body.propTypes = {
  rows: PropTypes.array.isRequired,
  editAction: PropTypes.func.isRequired,
  deleteAction: PropTypes.func.isRequired,
};

export default Body;
