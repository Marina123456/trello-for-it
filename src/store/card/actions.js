import {types} from './actionTypes';
//import "isomorphic-fetch";

const host ='https://krev.fun/ml_am/tr_pr.php';

export function fetchBoard(id) {
   return async function fetchBoardThunk (dispatch, getState) {
      const route  = `${host}?id_prj=${id}`;
      let response = await fetch(route);
          response = await response.json();
          //console.log(response);
      return dispatch({ type: types.FETCH, cards: response });
  }
}

export function  addPost(post) {
  return async function addBoardThunk (dispatch, getState) {

         dispatch({ type: types.START_SAVE });
         const route = `${host}/api/posts`;
         let response = await fetch(route,
           {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
          });
          response = await response.json();
          console.log(JSON.stringify(post));
         if (response.status=="OK") {
            dispatch({ type: types.FINISH_SAVE });
          } else {
             dispatch({ type: types.FAIL_ADD });
          }

     }
}
