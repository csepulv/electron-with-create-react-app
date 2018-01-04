import { connect } from 'react-redux';
import Tbody from './tbody.component';
import { deleteConsultation } from '../redux/consultation/consultation.actions';

export default connect(undefined, {
  deleteConsultationAction: deleteConsultation,
})(Tbody);
