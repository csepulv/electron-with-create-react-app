import { combineReducers } from 'redux';
import consultation from './consultation/consultation.reducers';
import imposed from './imposed/imposed.reducer';

export default combineReducers({ consultation, imposed });
