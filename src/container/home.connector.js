import { connect } from 'react-redux'
import Home from './home.component';
import { loadConsultations } from '../redux/consultation/consultation.actions';

export default connect(undefined, {
  loadConsultationsAction: loadConsultations,
})(Home);