import { connect } from 'react-redux';
import AccountContainer from './account.container';

import { loadConsultations } from '../../redux/consultation/consultation.actions';
import { loadCharges } from '../../redux/charge/charge.actions';

const mapStateToProps = state => ({
  consultations: state.consultation.consultations,
  charges: state.charges.charges,
  filters: state.filter,
});

export default connect(mapStateToProps, {
  loadConsultationsAction: loadConsultations,
  loadChargesAction: loadCharges,
})(AccountContainer);
