import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classname from 'classnames';

import './sidebar-container.css';
import './sidebar.css';
import './benefit.css';

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
    const { overallBenefit } = this.props;
    const { sidebarOpen } = this.state;
    const sidebarClasses = classname('sidebar-container', {
      'sidebar-container--closed': sidebarOpen,
    });

    return (
      <div className={sidebarClasses}>
        <div className="sidebar__content">
          <h1 className="sidebar__content-title">Mon Compte</h1>
          <div className="sidebar__content-benefit">
            <div className="benefit-card">
              <span className="benefit-card__symbol">€</span>
              <span className="benefit-card__number">{overallBenefit}</span>
              <p className="benefit-card__info">Bénéfice total</p>
            </div>
          </div>
        </div>
        <div className="sidebar__button" onClick={this.toggleSidebar} />
      </div>
    );
  }
}

SideBar.propTypes = {
  overallBenefit: PropTypes.number,
};

export default SideBar;
