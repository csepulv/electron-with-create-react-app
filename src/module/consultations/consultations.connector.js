import { connect } from 'react-redux';
import Consultations from './consultations.component';

import { deleteConsultation } from '../../redux/consultation/consultation.actions';

export default connect(null, {
  deleteAction: deleteConsultation,
})(Consultations);
