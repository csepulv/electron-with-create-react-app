import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './list.connector';

class Home extends Component {
  componentDidMount() {
    this.props.loadRows();
  }

  render() {
    return (
      <List/>
    );
  }
};

Home.propTypes = {
  loadRows: PropTypes.func.isRequired,
};

export default Home;
