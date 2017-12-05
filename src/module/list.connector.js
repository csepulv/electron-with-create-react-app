import { connect } from 'react-redux'
import List from './list.component';

const mapStateToProps = ({ consultation: { row }  }) => ({ row });

const VisibleTodoList = connect(mapStateToProps)(List);

export default VisibleTodoList
