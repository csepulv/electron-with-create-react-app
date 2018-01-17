import { connect } from 'react-redux';

import { createFilterTable } from '../redux/filter/filter.actions';
import FilterTable from './filterTable.component';

const mapStateToProps = state => ({
  filter: state.filter,
});

export default connect(mapStateToProps, {
  createFilterTableAction: createFilterTable,
})(FilterTable);
