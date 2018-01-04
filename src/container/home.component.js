import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './list.connector';
import './home-container.css';

class Home extends Component {
  componentDidMount() {
    this.props.loadConsultationsAction();
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
};

export default Home;
