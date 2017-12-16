import { connect } from 'react-redux'
import EditRow from './editRow.component';
import { addLine } from '../redux/consultation/consultation.actions';
import { closeModal } from '../redux/modal/modal.actions';


const mapStateToProps = ({ consultation: { currentRow }  }) => ({ currentRow });

const mapDispatchToProps = dispatch => ({
  addLineAction: (currentRow) => dispatch(addLine(currentRow)),
  closeModalAction: () => dispatch(closeModal)
});

const EditCellComponent = connect(mapStateToProps, mapDispatchToProps)(EditRow);

export default EditCellComponent;
