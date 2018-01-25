import { connect } from 'react-redux';
import ChargeEdit from './chargeEdit.component';

import { createCharge, updateCharge } from '../../redux/charge/charge.actions';

export default connect(null, {
  createChargeAction: createCharge,
  updateChargeAction: updateCharge,
})(ChargeEdit);
