import { connect } from 'react-redux';
import Home from './home.component';
import { loadConsultations } from '../redux/consultation/consultation.actions';
import { loadImposed } from '../redux/imposed/imposed.actions';

export default connect(undefined, {
  loadConsultationsAction: loadConsultations,
  loadImposedActions: loadImposed,
})(Home);
