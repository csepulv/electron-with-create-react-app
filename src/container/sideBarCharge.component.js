import React from 'react';
import PropTypes from 'prop-types';

import SideBarBenefit from '../module/sideBarBenefit.component';
import './form.css';

const SideBarCharge = ({ overallBenefit, taxableBenefit, imposed, responsability }) => (
  <div>
    <SideBarBenefit
      overallBenefit={overallBenefit}
      taxableBenefit={taxableBenefit}
      imposed={imposed}
      responsability={responsability}
    />
  </div>
);

SideBarCharge.propTypes = {
  // eslint-disable-next-line
  imposed: PropTypes.object,
  // eslint-disable-next-line
  responsability: PropTypes.object,
  overallBenefit: PropTypes.number.isRequired,
  taxableBenefit: PropTypes.number.isRequired,
};

export default SideBarCharge;
