import { connect } from 'react-redux'
import EditRow from './editRow.component';

const mapStateToProps = ({ consultation: { currentRow }  }) => ({ currentRow });

const EditCellComponent = connect(mapStateToProps)(EditRow);

export default EditCellComponent;
