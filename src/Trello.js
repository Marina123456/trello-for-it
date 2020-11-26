import React, { useState, useEffect } from "react";
import { fetchBoard } from './store/card/actions';
import { useDispatch, useSelector } from 'react-redux';
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
import MyCard from './MyCard';

function onCardRemoveClick(board, fromColumn, card){
  console.log(fromColumn);
}
function onCardAddClick(board,inColumn,card){
  console.log(JSON.stringify({project_id:5, inColumn_id:inColumn.id, card: card}));
}
function onCardMoveDrag(board, card, source, destination) {// board, card, source, destination
  console.log(card);
}
function Trello(props) {
  const board = useSelector(state=>state.card.board);
  const id=props.match.params.id;
  //console.log(id);
  const dispatch = useDispatch();

 useEffect(() => {
    dispatch(fetchBoard(id));

  }, []);
  /*renderCard={({ content }, { removeCard, dragging }) => (
              <MyCard dragging={dragging}>
                  {content}
                  <button type="button" onClick={removeCard}>Remove Card</button>
              </MyCard>
)}
*/
  console.log(board);
  return (
    <div>
    {
      (board.columns.length>0) ?

    <Board

      allowRemoveLane
      allowRemoveCard
      onCardRemove={onCardRemoveClick}
      initialBoard={board}
      allowAddCard={{ on: "top" }}

      onNewCardConfirm={draftCard => ({
        id: new Date().getTime(),
        ...draftCard
      })}
      onCardDragEnd = {onCardMoveDrag}
      onCardNew={onCardAddClick}

    />
    : null }
    </div>
  );

}


export default Trello;
