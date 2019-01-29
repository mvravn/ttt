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
    {tileIndex: 8, occupant: 0}],
  isHumanTurn: true,
  isGameOn: false
}

const placePieceReducer = (state = initState, action) => {
  if (action.type === 'PLACE_PIECE') {
    console.log('Action: ', action);
    let newOccupier = state.board.map(pieceBeingMapped => {
      if(pieceBeingMapped.tileIndex === action.tileIndex && pieceBeingMapped.occupant === 0){
        return { tileIndex: action.tileIndex, occupant: 1 }
      }
      else{ return pieceBeingMapped }
    })
    return {
      ...state,
      board: newOccupier,
      isHumanTurn: false,
      isGameOn: true
    }
  }
  return state;
}

export default placePieceReducer