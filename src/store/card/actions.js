import {types} from './actionTypes';

const host ='https://krev.fun/ml_am';

export function fetchBoard(id) {
   return async function fetchBoardThunk (dispatch, getState) {
      const route  = `${host}/board/${id}`;
      let response = await fetch(route);
          response = await response.json();

      return dispatch({ type: types.FETCH, cards: response });

  }
}

export function  saveCard(newCard,updatedBoard) {
  return async function addBoardThunk (dispatch, getState) {
         dispatch({ type: types.FINISH_SAVE, updatedBoard:updatedBoard});

         const route = `${host}/board/${newCard.board_id}/column/${newCard.inColumn_id}/card`;
         let response = await fetch(route,
           {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCard.card)
          });
          response = await response.json();
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
         const route = `${host}/board/${newStateCard.board_id}/columns/card/${newStateCard.card.id}`;
         let response = await fetch(route,
           {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              source:newStateCard.source,
              destination:newStateCard.destination
            })
          });
          response = await response.json();
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
         const route = `${host}/board/${deletedCard.board_id}/column/${deletedCard.fromColumn_id}/card/${deletedCard.card.id}`;
         let response = await fetch(route,
           {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            //body: JSON.stringify(deletedCard)
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
          const route = `${host}/board/${editingCard.board_id}/column/${editingCard.fromColumnId}/card/${editingCard.card.id}`;
          let response = await fetch(route,
            {
             method: 'PUT',
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
             },
             body: JSON.stringify(editingCard.card)
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
export function saveColumn(newColumn,updatedBoard) {
  return async function editBoardThunk (dispatch, getState) {
         dispatch({ type: types.FINISH_SAVE, updatedBoard:updatedBoard});
         const route = `${host}/board/${newColumn.board_id}/column`;
         let response = await fetch(route,
           {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newColumn.newColumn)
          });
          response = await response.json();
          console.log(JSON.stringify(response));

 }
}
export function deleteColumn(deletedColumn,updatedBoard) {
  return async function editBoardThunk (dispatch, getState) {
         dispatch({ type: types.FINISH_SAVE, updatedBoard:updatedBoard});
         const route = `${host}/board/${deletedColumn.board_id}/column/${deletedColumn.deletedColumn.id}`;
         let response = await fetch(route,
           {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            //body: JSON.stringify(deletedColumn)
          });
          response = await response.json();
          console.log(JSON.stringify(response));
 }
}
export function renameColumnDB(editingColumn,updatedBoard) {
  return async function editBoardThunk (dispatch, getState) {
         dispatch({ type: types.FINISH_SAVE, updatedBoard:updatedBoard});
         const route = `${host}/board/${editingColumn.board_id}/column/${editingColumn.renamedColumn.id}`;
         let response = await fetch(route,
           {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(editingColumn.renamedColumn)
          });
          response = await response.json();
          console.log(JSON.stringify(response));
 }
}
export function moveColumnDB(movedColumnInfo,updatedBoard) {
  return async function editBoardThunk (dispatch, getState) {
         dispatch({ type: types.FINISH_SAVE, updatedBoard:updatedBoard});
         const route = `${host}/board/${movedColumnInfo.board_id}/columns/${movedColumnInfo.columnId}`;
         let response = await fetch(route,
           {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              source: movedColumnInfo.source,
              destination: movedColumnInfo.destination
            })
          });
          response = await response.json();
          console.log(JSON.stringify(response));
 }
}
