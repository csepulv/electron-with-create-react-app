import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/lib/Modal';
import Edit from '../icons/edit.svg';
import FilterTableEdit from '../module/filterTableEdit.component';

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
      modalContent: this.props.filter,
    });
  };

  render() {
    const { filter, createFilterTableAction } = this.props;
    const { modalOpen, modalContent } = this.state;

    return (
      <div>
        <p>{filter.year}</p>
        <p>{filter.month}</p>
        <button onClick={() => this.editFilter(filter)}>
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
  filter: PropTypes.object,
  createFilterTableAction: PropTypes.func.isRequired,
};

export default FilterTable;
