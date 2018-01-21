import { connect } from 'react-redux';
import AccountContainer from './account.container';

const mapStateToProps = state => ({
  consultations: state.consultation.consultations,
  filters: state.filter,
});

export default connect(mapStateToProps)(AccountContainer);
