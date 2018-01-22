import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { find } from 'lodash';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';

import SideBar from '../../container/sideBar.component';
import Consultations from '../consultations/consultations.connector';
import ConsulationEdit from '../consultationEdit/consultationEdit.connector';

class AccountComponent extends Component {
  constructor() {
    super();

    this.state = {
      consulationEditOpen: false,
      consulationEditContent: {},
    };
  }

  toggleConsulationEdit = () => {
    this.setState({
      consulationEditOpen: !this.state.consulationEditOpen,
    });
  };

  openConsultation = id => {
    this.setState({
      consulationEditOpen: true,
      consulationEditContent: find(this.props.consultations, element => element.id === id),
    });
  };

  render() {
    const { revenue, expenses, profit, consultations } = this.props;

    return (
      <div className="App-content">
        <SideBar revenue={revenue} expenses={expenses} profit={profit} />
        <ConsulationEdit
          open={this.state.consulationEditOpen}
          consultation={this.state.consulationEditContent}
          toggleModal={this.toggleConsulationEdit}
        />
        <Tabs defaultActiveKey={1} id="accountTabs">
          <Tab eventKey={1} title="Consultations">
            <Consultations
              consultations={consultations}
              createAction={() => this.setState({ consulationEditOpen: true })}
              editAction={this.openConsultation}
            />
          </Tab>
          <Tab eventKey={2} title="Charges">
            Tab 1 content
          </Tab>
        </Tabs>
      </div>
    );
  }
}

AccountComponent.propTypes = {
  consultations: PropTypes.array.isRequired,
  revenue: PropTypes.number.isRequired,
  charges: PropTypes.object.isRequired,
  expenses: PropTypes.number.isRequired,
  profit: PropTypes.number.isRequired,
};

export default AccountComponent;
