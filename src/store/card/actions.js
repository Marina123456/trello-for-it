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

export function  addCard(newCard) {
  return async function addBoardThunk (dispatch, getState) {

         dispatch({ type: types.START_SAVE });
         const route = `${host}`;
         let response = await fetch(route,
           {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCard)
          });
          response = await response.json();
          console.log(JSON.stringify(response));
         if (response.status=="OK") {
            dispatch({ type: types.FINISH_SAVE });
          } else {
             dispatch({ type: types.FAIL_SAVE });
          }

     }
}
