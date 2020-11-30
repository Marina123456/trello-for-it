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

export function  saveCard(newCard,updatedBoard) {
  return async function addBoardThunk (dispatch, getState) {
         dispatch({ type: types.FINISH_SAVE, updatedBoard:updatedBoard});
         //dispatch({ type: types.START_SAVE });
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
         /*if (response.status=="OK") {
            dispatch({ type: types.FINISH_SAVE });
          } else {
             dispatch({ type: types.FAIL_SAVE });
          }*/


     }
}

export function  moveCardDB(newStateCard,updatedBoard) {
  return async function moveBoardThunk (dispatch, getState) {
    dispatch({ type: types.FINISH_SAVE, updatedBoard:updatedBoard});
        //dispatch({ type: types.START_SAVE });
         const route = `${host}`;
         let response = await fetch(route,
           {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStateCard)
          });
          response = await response.json();
          console.log(JSON.stringify(response));

         /*if (response.status=="OK") {
            dispatch({ type: types.FINISH_SAVE }, updatedBoard);
          } else {
             dispatch({ type: types.FAIL_SAVE },updatedBoard);
          }*/


     }
}
export function  deleteCard(deletedCard,updatedBoard) {
  return async function deleteBoardThunk (dispatch, getState) {
        dispatch({ type: types.FINISH_SAVE, updatedBoard:updatedBoard});
         //dispatch({ type: types.START_SAVE });
         const route = `${host}`;
         let response = await fetch(route,
           {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(deletedCard)
          });
          response = await response.json();
          console.log(JSON.stringify(response));
         /*if (response.status=="OK") {
            dispatch({ type: types.FINISH_SAVE });
          } else {
             dispatch({ type: types.FAIL_SAVE });
          }*/

     }
}

export function  editForRender(editingCard,updatedBoard) {
  return async function editBoardThunk (dispatch, getState) {
   dispatch({ type: types.FINISH_SAVE, updatedBoard:updatedBoard});
 }
}
export function  editCardDB(editingCard,updatedBoard) {
  return async function editBoardThunk (dispatch, getState) {
         dispatch({ type: types.FINISH_SAVE, updatedBoard:updatedBoard});
        // dispatch({ type: types.START_SAVE });
         /*const route = `${host}`;
         let response = await fetch(route,
           {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(editingCard)
          });
          response = await response.json();
          console.log(JSON.stringify(response));*/
         /*if (response.status=="OK") {
            dispatch({ type: types.FINISH_SAVE });
          } else {
             dispatch({ type: types.FAIL_SAVE });
          }*/

     }
}

export function saveColumn(newColumn,updatedBoard) {
  return async function editBoardThunk (dispatch, getState) {
   dispatch({ type: types.FINISH_SAVE, updatedBoard:updatedBoard});
 }
}

export function deleteColumn(newColumn,updatedBoard) {
  return async function editBoardThunk (dispatch, getState) {
   dispatch({ type: types.FINISH_SAVE, updatedBoard:updatedBoard});
 }
}

export function renameColumnDB(newColumn,updatedBoard) {
  return async function editBoardThunk (dispatch, getState) {
   dispatch({ type: types.FINISH_SAVE, updatedBoard:updatedBoard});
 }
}
