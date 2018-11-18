const initState = {
  board: [
    {tile: 0, occupant: 0},
    {tile: 1, occupant: 0},
    {tile: 2, occupant: 0},
    {tile: 3, occupant: 0},
    {tile: 4, occupant: 0},
    {tile: 5, occupant: 0},
    {tile: 6, occupant: 0},
    {tile: 7, occupant: 0},
    {tile: 8, occupant: 0}]
}
/* #42, 9:47 */
const rootReducer = (state = initState, action) => {
  console.log('Action: ', action);
  if (action.type === 'PLACE_PIECE') {
    let newOccupier = state.board.filter(piece => {
      return action.tile !== piece.tile;
    })

    return {
      ...state,
      board: newOccupier
    }
  }
  return state;
}

export default rootReducer