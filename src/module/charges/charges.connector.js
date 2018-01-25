import { connect } from 'react-redux';
import Charges from './charges.component';

import { deleteCharge } from '../../redux/charge/charge.actions';

export default connect(null, {
  deleteAction: deleteCharge,
})(Charges);
