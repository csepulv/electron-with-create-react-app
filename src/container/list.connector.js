import { connect } from 'react-redux'
import List from './list.component';
import { closeModal } from '../redux/modal/modal.actions';


const mapStateToProps = state => ({
  modal: state.modal.modalOpen,
  row: state.consultation.rows,
});

const mapDispatchToProps = dispatch => ({
  closeModalAction: () => dispatch(closeModal),
});
const ListComponent = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListComponent;
