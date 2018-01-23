import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { find } from 'lodash';

import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';

import SideBar from '../../component/sideBar/sideBar.component';

import Consultations from '../../module/consultations/consultations.connector';
import ConsulationEdit from '../../module/consultationEdit/consultationEdit.connector';

import Charges from '../../module/charges/charges.connector';
import ChargeEdit from '../../module/chargeEdit/chargeEdit.connector';

class AccountComponent extends Component {
  constructor() {
    super();

    this.state = {
      consulationEditOpen: false,
      chargeEditOpen: false,
      consulationEditContent: {},
    };
  }

  toggleConsulationEdit = () => {
    this.setState({
      consulationEditOpen: !this.state.consulationEditOpen,
    });
  };

  toggleChargeEdit = () => {
    this.setState({
      chargeEditOpen: !this.state.chargeEditOpen,
    });
  };

  openConsultation = id => {
    this.setState({
      consulationEditOpen: true,
      chargeEditOpen: false,
      consulationEditContent: find(this.props.consultations, element => element.id === id),
    });
  };

  openCharge = id => {
    this.setState({
      chargeEditOpen: true,
      consulationEditOpen: false,
      chargeEditContent: find(this.props.charges, element => element.id === id),
    });
  };

  render() {
    const { revenue, expenses, profit, consultations, charges } = this.props;

    return (
      <div className="App-content">
        <SideBar revenue={revenue} expenses={expenses} profit={profit} />
        <div className="App-content__list">
          <Tabs defaultActiveKey={1} id="accountTabs">
            <Tab eventKey={1} title="Consultations">
              <Consultations
                consultations={consultations}
                createAction={() => this.setState({ consulationEditOpen: true })}
                editAction={this.openConsultation}
              />
            </Tab>
            <Tab eventKey={2} title="Charges">
              <Charges
                charges={charges}
                createAction={() => this.setState({ chargeEditOpen: true })}
                editAction={this.openCharge}
              />
            </Tab>
          </Tabs>
        </div>
        <ConsulationEdit
          open={this.state.consulationEditOpen}
          consultation={this.state.consulationEditContent}
          toggleModal={this.toggleConsulationEdit}
        />

        <ChargeEdit
          open={this.state.chargeEditOpen}
          consultation={this.state.chargeEditContent}
          toggleModal={this.toggleChargeEdit}
        />
      </div>
    );
  }
}

AccountComponent.propTypes = {
  consultations: PropTypes.array.isRequired,
  charges: PropTypes.array.isRequired,
  revenue: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  profit: PropTypes.number.isRequired,
};

export default AccountComponent;
