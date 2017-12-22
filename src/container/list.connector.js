import { connect } from 'react-redux'
import List from './list.component';

const mapStateToProps = state => ({
  consultations: state.consultation.consultations,
});

export default connect(mapStateToProps)(List);
