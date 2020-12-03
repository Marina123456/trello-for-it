import React, { useState, useEffect } from "react";
import { fetchBoard, saveCard,
         deleteCard, moveCardDB,
         editCardDB, editForRender,
         saveColumn, deleteColumn,
         renameColumnDB, moveColumnDB} from './store/card/actions';
import { useDispatch, useSelector } from 'react-redux';
import Board, { moveCard,
               removeColumn,  removeCard,
               addCard,  addColumn,
               changeColumn, moveColumn } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
import MyCard from './MyCard';
import MyColumn from './MyColumn';
import editCard from './utils/editCard';
import inColumn from './utils/inColumn';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import MyColumnAdd from './MyColumnAdd';

const useStyles = makeStyles({
  addColumnButton: {
    width: 250,
    height: 35,
    marginTop: 10
  },
  box: {
    display: 'inline-flex',

  }
});

function Trello(props) {
  const board = useSelector(state=>state.card.board);
  const [isShowColumnAdd, setShowColumnAdd] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  const id=props.match.params.id;

  const onCardMoveDrag = (card, source, destination) => {
     const updatedBoard = moveCard(board, source, destination);

     dispatch(moveCardDB({
           project_id: id,
           source:source,
           destination:destination,
           card: card
         }, updatedBoard));
  };

  const onCardAddClick = ( inColumn,card) => {
     const updatedBoard = addCard(board, inColumn, card);

     dispatch(saveCard({
            project_id: id,
            inColumn_id:inColumn.id,
            card:card
          },updatedBoard));
  };

  const onCardRemoveClick = (fromColumn, card) => {
    const updatedBoard = removeCard(board, fromColumn, card);

    dispatch(deleteCard({
           project_id: id,
           fromColumn_id:fromColumn.id,
           card: card
         },updatedBoard));
  };

  const onCardEditClick = (card) => {
    const updatedBoard = editCard(card, board);
    let fromColumn = inColumn(card, board);
    const forRender = removeCard(board, fromColumn, card);

    dispatch(editForRender({
           project_id: id,
           fromColumnId:fromColumn.id,
           card: card
         }, forRender));
    dispatch(editCardDB({
           project_id: id,
           fromColumnId:fromColumn.id,
           card: card
         }, updatedBoard));
  };

  const onColumnAddClick = (newColumn) => {
    const updatedBoard = addColumn(board, newColumn);

    dispatch(saveColumn({
           project_id: id,
           newColumn:newColumn
          }, updatedBoard));
  };

  const onColumnRemoveClick = (deletedColumn) => {
    const updatedBoard = removeColumn(board, deletedColumn);

    dispatch(deleteColumn({
           project_id: id,
           deletedColumn: deletedColumn
          }, updatedBoard));
  };

  const onColumnRenameClick = (renamedColumn) => {
     const updatedBoard = changeColumn(board, renamedColumn,{'title':renamedColumn.title});

     dispatch(renameColumnDB({
            project_id: id,
            renamedColumn: renamedColumn
           }, updatedBoard));
  };

  const onColumnDragEndClick = ( column, source, destination) => {
     const updatedBoard = moveColumn(board, source, destination);

     dispatch(moveColumnDB({
            project_id: id,
            columnId: column.id,
            source: source,
            destination: destination
          }, updatedBoard));

  }

  useEffect(() => {
     dispatch(fetchBoard(id));
  }, []);

  return (
    <div>
    <div className={classes.box}>
    {
      (board.columns.length>0) ?

          <Board
              renderCard={( content , { dragging }) => (
                  <MyCard dragging={dragging}
                          card={content}
                          removeFunc={onCardRemoveClick}
                          editingFunc = {onCardEditClick}
                  />
                 )}
              allowAddColumn
              allowRemoveLane
              allowRemoveCard
              onCardRemove={onCardRemoveClick}
              onNewCardConfirm={draftCard => ({
                                id: new Date().getTime(),
                                ...draftCard
                                })}
              onCardDragEnd = {onCardMoveDrag}
              onCardNew={onCardAddClick}
              renderColumnHeader={( title ) => (
                                 <MyColumn
                                   column={title}
                                   addCardFunc={onCardAddClick}
                                   onColumnRemoveFunc={onColumnRemoveClick}
                                   onColumnRenameFunc={onColumnRenameClick}
                                   />
                                   )}
              onColumnDragEnd={onColumnDragEndClick}

               >
               {board}
         </Board>
         : null }
        {(!isShowColumnAdd) ?
         (<Button
            variant="outlined"
            size="small"
            className={classes.addColumnButton}
            onClick={()=>setShowColumnAdd(true)}
            startIcon={<AddIcon />} >
               Добавить колонку
            </Button>) :
           (<MyColumnAdd setShowColumnAddFunc={setShowColumnAdd} onColumnAddFunc={onColumnAddClick}/>)
         }

       </div>
    </div>
  );
}
export default Trello;
