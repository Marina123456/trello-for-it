import {types} from './actionTypes';

export default function reduce(state = {}, action = {}) {
  switch (action.type) {
      case types.FETCH:
          if (action.projects) {
              return Object.assign({}, state, {
                        project_list: action.projects.projects
                    });
         }
        return state;
      default:
        return state;
    }
}
