import { connect } from 'react-redux';
import SideBarCharge from './sideBarCharge.component';

const mapStateToProps = state => ({
  imposed: state.imposed.fiscal,
  responsability: state.imposed.charge,
  overallBenefit: state.consultation.benefit.overall,
  taxableBenefit: state.consultation.benefit.taxableBenefit,
});

export default connect(mapStateToProps)(SideBarCharge);
