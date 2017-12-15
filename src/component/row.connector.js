import { connect } from 'react-redux'
import Row from './row.component';
import { openModal, closeModal } from '../redux/modal/modal.actions';
import { removeLine, editLine } from '../redux/consultation/consultation.actions';

const mapStateToProps = ({ modal: {modalOpen}  }) => ({ modalState: modalOpen });

const mapDispatchToProps = dispatch => ({
  openModalAction: () => dispatch(openModal),
  closeModalAction: () => dispatch(closeModal),
  removeRowAction: (id) => dispatch(removeLine(id)),
  editLineAction: (row) => dispatch(editLine(row)),
});

const RowComponent = connect(mapStateToProps, mapDispatchToProps)(Row);

export default RowComponent;
