import { combineReducers } from 'redux';
import consultation from './consultation/consultation.reducers';
// import imposed from './imposed/imposed.reducer';
import filter from './filter/filter.reducers';

export default combineReducers({ consultation, filter });
