import { connect } from 'react-redux';
import EditRow from './editRow.component';
import { createConsultation, updateConsultation } from '../redux/consultation/consultation.actions';

export default connect(undefined, {
  createConsultationAction: createConsultation,
  updateConsultationAction: updateConsultation,
})(EditRow);
