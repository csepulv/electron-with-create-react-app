import { connect } from 'react-redux'
import RowHead from './rowHead.component';

import { openModal } from '../redux/modal/modal.actions';

const mapStateToProps = state => ({
  row: state.consultation.rows,
});

const mapDispatchToProps = dispatch => ({
  openModalAction: () => dispatch(openModal),
});

const RowHeadComponent = connect(mapStateToProps, mapDispatchToProps)(RowHead);

export default RowHeadComponent;
