import { connect } from 'react-redux';
import AccountContainer from './account.container';

import { loadConsultations } from '../../redux/consultation/consultation.actions';
import { loadCharges } from '../../redux/charge/charge.actions';
import { loadFilterTable } from '../../redux/filtering/filtering.actions';

const mapStateToProps = state => ({
  consultations: state.consultation.consultations,
  charges: state.charges.charges,
  filtering: state.filtering,
});

export default connect(mapStateToProps, {
  loadConsultationsAction: loadConsultations,
  loadChargesAction: loadCharges,
  loadFilterTableAction: loadFilterTable,
})(AccountContainer);
