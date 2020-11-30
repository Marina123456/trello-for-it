import React, { useState, useEffect } from "react";


export default function editCard(cardSearch,board) {


    let indexColumn;
    let indexCard;
    board.columns.some(function(column, i, arr) {
      indexColumn = i;
      if (column.cards.some(function(card, iCard, arr) {
              if (card.id == cardSearch.id){
                indexCard = iCard;
                return true;

            }
     }))
     return true;

   });
   board.columns[indexColumn].cards[indexCard] = cardSearch;
   console.log(board);
   return board;
}
