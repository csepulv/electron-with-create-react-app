import { connect } from 'react-redux'
import List from './list.component';
import { addLine, editLine } from '../redux/actions';

const mapStateToProps = ({ consultation: { row }  }) => ({ row });

const VisibleTodoList = connect(mapStateToProps, {
  addLineAction: addLine,
  editLineAction: editLine,
})(List);

export default VisibleTodoList
