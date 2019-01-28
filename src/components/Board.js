import React, { Component } from 'react'
import { connect } from 'react-redux'

/* Ændre og animere https://stackoverflow.com/questions/34700425/react-animate-element-when-property-changes/34704054 

https://www.reddit.com/r/reactjs/comments/6pofq9/how_to_trigger_an_animation_when_prop_changes/
*/

class Board extends Component {

  handleClick = (boardlocation) => {
    console.log("isHumansTurn: ", this.props);
    if(this.props.isHumansTurn === true){this.props.placePiece(this.props.board[boardlocation].tileIndex)}
    /* this.props.placePiece(this.props.board[boardlocation].tileIndex) */
  }

  componentDidUpdate(prevProps){
    /* console.log("props.board ", this.props.board);
    console.log("prevProps.board ", prevProps.board); */

    for (let i = 0; i < 9; i++){
      if(this.props.board[i].occupant !== prevProps.board[i].occupant){
        console.log("Changed occupant of tileIndex is: ", i);
        document.getElementById(`tile_${i}`).classList.add("cssPickedAni");
      }
    }
  }

  render() {
    /* console.log("Board state: ", this.props.board);
    console.log("Props on board: ", this.props); */
    
    const tiles = this.props.board;
    /* draws the board */
    const boardLayout = tiles.map(tile => {
      let piece = '';
      /* use icon the player has chosen: */
      if (tile.occupant === 1) { piece = this.props.icon } 
      /* AI uses the opposite icon: */
      else if (tile.occupant === 2) {
        if(this.props.icon === 'X'){ piece = 'O' }
        else{ piece = 'X' }
      }
      /* calculate the drawing */
      return (
        <div className="tile surface" id={`tile_${tile.tileIndex}`} onClick={() => this.handleClick(tile.tileIndex)} key={tile.tileIndex}>{piece}</div>
      )
      }
    )

    return (
      /* do the actual drawing */
      <div className="board">
        { boardLayout }
      </div>
    )
  }
}

/* https://youtu.be/sh6hZKt-jh0?list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&t=209 Her sættes rootReducerens ekstra key (place) på */
const mapStateToProps = (state) => {
  return {
    board: state.place.board,
    isHumansTurn: state.place.isHumansTurn,
    icon: state.pickIcon.icon
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    placePiece: (tileIndex) => { dispatch ({type: 'PLACE_PIECE', tileIndex: tileIndex});}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
