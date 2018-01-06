import { connect } from 'react-redux';
import SideBarBenefit from './sideBarBenefit.component';

const mapStateToProps = state => ({
  overallBenefit: state.consultation.benefit.overall,
  taxableBenefit: state.consultation.benefit.taxableBenefit,
});

export default connect(mapStateToProps)(SideBarBenefit);
