import {types} from './actionTypes';
//import "isomorphic-fetch";

const host ='https://krev.fun/ml_am/tr_pr.php';

export function fetchProjects() {
   return async function fetchProjectsThunk (dispatch, getState) {
      const route  = `${host}`;
      let response = await fetch(route);
          response = await response.json();
          //console.log(response);
      return dispatch({ type: types.FETCH, projects: response });
  }
}
