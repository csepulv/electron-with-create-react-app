import { connect } from 'react-redux'
import Home from './home.component';
import { loadRows } from '../redux/consultation/consultation.actions';

const mapDispatchToProps = dispatch => ({
  loadRows: () => dispatch(loadRows),
})
const HomeComponent = connect(undefined, mapDispatchToProps)(Home);

export default HomeComponent;
