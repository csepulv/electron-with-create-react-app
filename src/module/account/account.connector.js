import { connect } from 'react-redux';
import AccountContainer from './account.container';

import { loadConsultations } from '../../redux/consultation/consultation.actions';

const mapStateToProps = state => ({
  consultations: state.consultation.consultations,
  filters: state.filter,
});

export default connect(mapStateToProps, {
  loadConsultationsAction: loadConsultations,
})(AccountContainer);
