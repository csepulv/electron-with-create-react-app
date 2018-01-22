import { combineReducers } from 'redux';
import consultation from './consultation/consultation.reducers';
import charges from './charge/charge.reducers';
import filter from './filter/filter.reducers';

export default combineReducers({ consultation, charges, filter });
