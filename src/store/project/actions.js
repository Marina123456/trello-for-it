import {types} from './actionTypes';

const host ='https://krev.fun/ml_am/board';

export function fetchProjects() {
   return async function fetchProjectsThunk (dispatch, getState) {
      const route  = `${host}`;
      let response = await fetch(route);
          response = await response.json();
      return dispatch({ type: types.FETCH, projects: response });
  }
}
