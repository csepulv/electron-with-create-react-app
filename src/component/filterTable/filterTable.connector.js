import { connect } from 'react-redux';

import { createFilterTable } from '../../redux/filtering/filtering.actions';
import FilterTable from './filterTable.component';

const mapStateToProps = state => ({
  filtering: state.filtering,
});

export default connect(mapStateToProps, {
  createFilterTableAction: createFilterTable,
})(FilterTable);
