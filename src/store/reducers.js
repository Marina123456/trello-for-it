import { combineReducers } from 'redux';
import cardReducer from './card/reducer';

let reduce = combineReducers({card: cardReducer});
export default reduce;
