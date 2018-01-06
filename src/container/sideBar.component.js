import React, { Component } from 'react';
import classname from 'classnames';

import SideBarBenefit from '../module/sideBarBenefit.connector';
import SideBarImposed from '../module/sideBarImposed.connector';

import './sidebar-container.css';
import './sidebar.css';

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

    return (
      <div className={sidebarClasses}>
        <div className="sidebar__content">
          <SideBarBenefit />
          <SideBarImposed />
          <div className="sidebar__content-border-bottom" />
        </div>
        <button className="sidebar__button" onClick={this.toggleSidebar} />
      </div>
    );
  }
}

export default SideBar;
