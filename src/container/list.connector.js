import { connect } from 'react-redux'
import List from './list.component';
import { addLine } from '../redux/consultation/consultation.actions';

const mapStateToProps = ({ consultation: { rows }  }) => ({ row:rows });

const mapDispatchToProps = dispatch => ({
  addLineAction: () => dispatch(addLine),
});


const ListComponent = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListComponent;
