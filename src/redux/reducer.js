import { combineReducers } from 'redux';
import { modal } from './modal/modal.reducer';
import { consultation } from './consultation/consultation.reducers';

export default combineReducers({modal, consultation});
