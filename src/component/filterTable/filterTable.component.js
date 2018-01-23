import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/lib/Modal';
import Edit from '../../icons/edit.svg';
import FilterTableEdit from './filterTableEdit.component';
import monthToString from '../../utils/month.utils';
import './filter-table.css';

class FilterTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      modalContent: {},
    };
  }

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
      modalContent: {},
    });
  };

  editFilter = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
      modalContent: this.props.filtering,
    });
  };

  render() {
    const { filtering, createFilterTableAction } = this.props;
    const { modalOpen, modalContent } = this.state;
    const monthHighlighted = filtering.month;

    return (
      <div className="filter-table">
        <p className="filter-table__month">
          <strong>Mois</strong> : {monthToString(monthHighlighted)}
        </p>
        <p className="filter-table__year">
          <strong>Année</strong> : {filtering.year}
        </p>
        <button className="filter-table__button" onClick={() => this.editFilter(filtering)}>
          <img className="icons" src={Edit} alt="edit" />
        </button>
        <Modal show={modalOpen} onHide={this.toggleModal}>
          {modalOpen && (
            <FilterTableEdit
              filter={modalContent}
              toggleModal={this.toggleModal}
              createFilterTableAction={createFilterTableAction}
            />
          )}
        </Modal>
      </div>
    );
  }
}

FilterTable.propTypes = {
  // eslint-disable-next-line
  filtering: PropTypes.object,
  createFilterTableAction: PropTypes.func.isRequired,
};

export default FilterTable;
