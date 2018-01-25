import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classname from 'classnames';

// import SideBarCharge from './sideBarCharge.connector';

import './sidebar-container.css';
import './sidebar.css';

import Sumary from '../../module/sumary/sumary.component';

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false,
    };
  }

  toggleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
    });
  };

  render() {
    const { sidebarOpen } = this.state;
    const sidebarClasses = classname('sidebar-container', {
      'sidebar-container--closed': sidebarOpen,
    });

    const { revenue, expenses, profit } = this.props;

    return (
      <div className={sidebarClasses}>
        <div className="sidebar__content">
          <Sumary revenue={revenue} expenses={expenses} profit={profit} />
          <div className="sidebar__content-border-bottom" />
        </div>
        <button className="sidebar__button" onClick={this.toggleSidebar} />
      </div>
    );
  }
}

SideBar.propTypes = {
  revenue: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  profit: PropTypes.number.isRequired,
};

export default SideBar;
