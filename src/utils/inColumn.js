export default function inColumn(cardSearch, board) {
    let inColumn_array;
    let indexColumn;
    board.columns.forEach(function(column, i, arr) {
     inColumn_array=column.cards.filter(function(card) {
              return card.id === cardSearch.id;
     });
     if (inColumn_array.length>0){
        indexColumn = i;
      }
   });
   return board.columns[indexColumn];
}
