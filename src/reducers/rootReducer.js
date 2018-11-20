const initState = {
  board: [
    {tileIndex: 0, occupant: 0},
    {tileIndex: 1, occupant: 0},
    {tileIndex: 2, occupant: 0},
    {tileIndex: 3, occupant: 0},
    {tileIndex: 4, occupant: 0},
    {tileIndex: 5, occupant: 0},
    {tileIndex: 6, occupant: 0},
    {tileIndex: 7, occupant: 0},
    {tileIndex: 8, occupant: 0}]
}
/* #42, 9:47 */
const rootReducer = (state = initState, action) => {
  console.log('Action: ', action);
  /* console.log('occupant of 2: ', board[tileIndex[2]].occupant); */
  if (action.type === 'PLACE_PIECE') {
    let newOccupier = state.board.map(piece => {
      console.log("value: ", action.tileIndex);
      if(piece.tileIndex === action.tileIndex && piece.occupant === 0){console.log("piece.occupant: ", piece.occupant); return {tileIndex: action.tileIndex, occupant: 1}}
      else{return piece}
      /* Havde filter været bedre? Piece bør omdøbes. Hvad er mest læsbart? */
    })
      
    console.log('newOccupier: ',newOccupier);
    return {
      ...state,
      board: newOccupier
    }
  
  }
  else {
    console.log("nope, won't do action!");
  }
  return state;
}
export default rootReducer