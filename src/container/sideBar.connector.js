import { connect } from 'react-redux';
import SideBar from './sideBar.component';

const mapStateToProps = state => ({
  overallBenefit: state.consultation.benefit.overall,
});

export default connect(mapStateToProps)(SideBar);
