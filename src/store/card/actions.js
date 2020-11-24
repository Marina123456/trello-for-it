import {types} from './actionTypes';
//import "isomorphic-fetch";

const host ='https://vrar29.000webhostapp.com/';

export function fetchBoard() {
   return async function fetchBoardThunk (dispatch, getState) {
      const route  = `${host}/api_trello/`;
      let response = await fetch(route);
          response = await response.json();
          //console.log(response);
      return dispatch({ type: types.FETCH, cards: response });
  }
}
