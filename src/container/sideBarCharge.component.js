import React from 'react';
import PropTypes from 'prop-types';

import SideBarBenefit from '../module/sideBarBenefit.component';
import SideBarImposed from '../module/sideBarImposed.component';
import SideBarResponsability from '../module/sideBarResponsability.component';
import './form.css';

const SideBarCharge = ({
  overallBenefit,
  taxableBenefit,
  imposed,
  createImposedAction,
  responsability,
  createResponsabilitydAction,
}) => (
  <div>
    <SideBarBenefit
      overallBenefit={overallBenefit}
      taxableBenefit={taxableBenefit}
      imposed={imposed}
      responsability={responsability}
    />
    <SideBarImposed imposed={imposed} createImposedAction={createImposedAction} />
    <SideBarResponsability responsability={responsability} createResponsabilitydAction={createResponsabilitydAction} />
  </div>
);

SideBarCharge.propTypes = {
  createImposedAction: PropTypes.func.isRequired,
  createResponsabilitydAction: PropTypes.func.isRequired,
  // eslint-disable-next-line
  imposed: PropTypes.object,
  // eslint-disable-next-line
  responsability: PropTypes.object,
  overallBenefit: PropTypes.number.isRequired,
  taxableBenefit: PropTypes.number.isRequired,
};

export default SideBarCharge;
