import { combineReducers } from 'redux';
import cardReducer from './card/reducer';
import projectReducer from './project/reducer';

let reduce = combineReducers({card: cardReducer, project: projectReducer});
export default reduce;
