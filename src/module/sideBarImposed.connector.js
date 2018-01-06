import { connect } from 'react-redux';
import SideBarImposed from './sideBarImposed.component';
import { createImposed } from '../redux/imposed/imposed.actions';

const mapStateToProps = state => ({
  imposed: state.imposed,
});

export default connect(mapStateToProps, {
  createImposedAction: createImposed,
})(SideBarImposed);
