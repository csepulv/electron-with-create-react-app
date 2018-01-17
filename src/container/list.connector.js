import { connect } from 'react-redux';
import List from './list.component';

const mapStateToProps = state => ({
  consultations: state.consultation.consultations,
  filter: state.filter,
});

export default connect(mapStateToProps)(List);
