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
      default:
        return state;
}
}
