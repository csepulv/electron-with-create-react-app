import { connect } from 'react-redux';
import ConsulationEdit from './consultationEdit.component';

import { createConsultation, updateConsultation } from '../../redux/consultation/consultation.actions';

export default connect(null, {
  createConsultationAction: createConsultation,
  updateConsultationAction: updateConsultation,
})(ConsulationEdit);
