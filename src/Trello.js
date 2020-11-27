import React, { useState, useEffect } from "react";
import { fetchBoard, addCard} from './store/card/actions';
import { useDispatch, useSelector } from 'react-redux';
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
import MyCard from './MyCard';
import MyColumn from './MyColumn';

function onCardRemoveClick(board, fromColumn, card){
  console.log(JSON.stringify({project_id:1, fromColumn_id:fromColumn.id, card: card}));
}

function onCardMoveDrag(board, card, source, destination) {// board, card, source, destination
  console.log(card);
  console.log(JSON.stringify({project_id:1, source:source, destination:destination, card: card}));
}
function Trello(props) {
  const board = useSelector(state=>state.card.board);
  const id=props.match.params.id;
  const dispatch = useDispatch();

  const onCardAddClick = (board,inColumn,card) => {

    dispatch(addCard({
      project_id:id,
      inColumn_id:inColumn.id,
      card:card
    }));

  };

 useEffect(() => {
    dispatch(fetchBoard(id));

  }, []);
  /*
*/
  console.log(board);
  return (
    <div>
    {
      (board.columns.length>0) ?

    <Board
      renderCard={( content , { removeCard, dragging }) => (
                <MyCard dragging={dragging} card={content} removeFunc={removeCard}/>
      )}

    renderColumnHeader={( title , { removeColumn, renameColumn, addCard }) => (
     <MyColumn column={title} addCardFunc={addCard}>
      {title}
      <button type='button' onClick={removeColumn}>Remove Column</button>
      <button type='button' onClick={() => renameColumn('New title')}>Rename Column</button>
      <button type='button' onClick={() => addCard({ id: 99, title: 'New Card' })}>Add Card</button>
     </MyColumn>
    )}

      allowRemoveLane
      allowRemoveCard
      onCardRemove={onCardRemoveClick}
      initialBoard={board}
      

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
