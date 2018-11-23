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

/* root reducer: https://www.youtube.com/watch?v=hOQ7x_X2gIg&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&index=12&t=0s */
const rootReducer = (state = initState, action) => {
  console.log('Action: ', action);
  if (action.type === 'PLACE_PIECE') {
    let newOccupier = state.board.map(piece => {
      if(piece.tileIndex === action.tileIndex && piece.occupant === 0){return {tileIndex: action.tileIndex, occupant: 1}}
      else{return piece}
    })
    return {
      ...state,
      board: newOccupier
    }
  
  }
  return state;
}
export default rootReducer