import { connect } from 'react-redux';
import SideBarCharge from './sideBarCharge.component';
import { createImposed, createResponsability } from '../redux/imposed/imposed.actions';

const mapStateToProps = state => ({
  imposed: state.imposed.fiscal,
  responsability: state.imposed.charge,
  overallBenefit: state.consultation.benefit.overall,
  taxableBenefit: state.consultation.benefit.taxableBenefit,
});

export default connect(mapStateToProps, {
  createImposedAction: createImposed,
  createResponsabilitydAction: createResponsability,
})(SideBarCharge);
