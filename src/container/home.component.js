import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './list.connector';
import './home-container.css';

class Home extends Component {
  componentDidMount() {
    this.props.loadConsultationsAction();
    // this.props.loadImposedActions();
    this.props.loadFilterTableActions();
  }

  render() {
    return (
      <div className="home-container">
        <List />
      </div>
    );
  }
}

Home.propTypes = {
  loadConsultationsAction: PropTypes.func.isRequired,
  loadImposedActions: PropTypes.func.isRequired,
  loadFilterTableActions: PropTypes.func.isRequired,
};

export default Home;
