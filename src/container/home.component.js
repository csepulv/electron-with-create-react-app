import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './list.connector';

class Home extends Component {
  componentDidMount() {
    this.props.loadConsultationsAction();
  }

  render() {
    return <List />;
  }
}

Home.propTypes = {
  loadConsultationsAction: PropTypes.func.isRequired,
};

export default Home;
