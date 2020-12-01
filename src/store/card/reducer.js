import {types} from './actionTypes';

export default function reduce(state = {}, action = {}) {
  switch (action.type) {
      case types.FETCH:
        if (action.cards) {
            return Object.assign({}, state, {
                     board: action.cards
                   });
        }
        return state;
      case types.START_SAVE:
        return Object.assign({}, state, {
                  cardSaved:false
                  });
      case types.FINISH_SAVE:
        if (action.updatedBoard) {
            return Object.assign({}, state, {
                     board: action.updatedBoard
                   });
        }
        return state;
      case types.FAIL_SAVE:
        return Object.assign({}, state, {
                cardSavedFail:true
               });
      default:
        return state;
      }
}
