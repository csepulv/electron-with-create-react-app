import { combineReducers } from 'redux';
import consultation from './consultation/consultation.reducers';
import charges from './charge/charge.reducers';
import filtering from './filtering/filtering.reducers';

export default combineReducers({ consultation, charges, filtering });
