import React, { useState, useEffect } from "react";
import { fetchBoard } from './store/card/actions';
import { useDispatch, useSelector } from 'react-redux';
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";

const board2 = {
  columns: [
    {
      id: 1,
      title: "Надо выполнить",
      cards: [
        {
          id: 1,
          title: "Cоздать управление",
          description: "Добавить к рукоядке рычага компонент Throwable для возможности брать"
        },
        {
          id: 2,
          title: "Маршрут корабля",
          description: "С помощью буйков создать маршрут корабля"
        }
      ]
    },
    {
      id: 2,
      title: "В работе",
      cards: [
        {
          id: 9,
          title: "Создание моря и корабля в нём",
          description: "Видео-подсказка: https://youtu.be/ei9vIirY08A"
        }
      ]
    },
    {
      id: 3,
      title: "Выполнено",
      cards: [
        {
          id: 10,
          title: "Гудок",
          description: "Создать гудок для подачи звукового сигнала"
        },
        {
          id: 11,
          title: "Создать 3D-модели",
          description: "Создать 3D-модели кораблей, причала, города влади, буйки. Исполнитель - Максим и Паша"
        }
      ]
    },
    {
      id: 4,
      title: "Отклонено",
      cards: [
        {
          id: 12,
          title: "Добавить terrain",
          description: "Добавить ландшафта"
        }
      ]
    }
  ]
};

function onLaneRemoveClick(){
  console.log('lane remove');
}
function onCardRemoveClick(){
  console.log('card remove');
}
function onLaneRenameClick(){
  console.log('lane remove');
}
function onNewCardClick(newCard){
  console.log(newCard);

}
function Trello() {
  const board = useSelector(state=>state.card.board);

  const dispatch = useDispatch();

 useEffect(() => {
    dispatch(fetchBoard());

  }, []);
console.log(board);
  return (
    <div>
    {
      (board.columns.length>0) ?

    <Board

      allowRemoveLane
      allowRenameColumn
      allowRemoveCard
      onLaneRemove={onLaneRemoveClick}
      onCardRemove={onCardRemoveClick}
      onLaneRename={console.log}
      initialBoard={board}
      allowAddCard={{ on: "top" }}
      onNewCardConfirm={draftCard => ({
        id: new Date().getTime(),
        ...draftCard
      })}

      onCardNew={onNewCardClick}

    />
    : null }
    </div>
  );

}


export default Trello;
