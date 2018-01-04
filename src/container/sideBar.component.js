import React, { Component } from 'react';
import classname from 'classnames';

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
    const sidebarClasses = classname('sidebar__content', {
      'sidebar__content--closed': sidebarOpen,
    });

    return (
      <div className="sidebar-container">
        <div className={sidebarClasses}>
          <h1>Mes Genoux</h1>
        </div>
        <a className="sidebar__button" onClick={this.toggleSidebar} />
      </div>
    );
  }
}

export default SideBar;
