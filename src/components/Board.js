import React, { Component } from 'react'
import { connect } from 'react-redux'

class Board extends Component {

  handleClick = (boardlocation) => {
    this.props.placePiece(this.props.board[boardlocation].tileIndex)
  }

  render() {
    console.log("Board state: ", this.props.board);
    
    const tiles = this.props.board;
    const boardLayout = tiles.map(tile => {
      var piece = ' ';
      console.log("Piece: ", this.props.icon);
      if (tile.occupant === 1) { piece = this.props.icon }
      else if (tile.occupant === 2) {
        if(this.props.icon === 'X'){ piece = 'O' }
        else{ piece = 'X' }
      }
      return (
        <div className="tile surface" id={`tile_${tile.tileIndex}`} onClick={() => this.handleClick(tile.tileIndex)} key={tile.tileIndex}>{piece}</div>
      )
    })

    return (
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
    icon: state.pickIcon.icon
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    placePiece: (tileIndex) => { dispatch ({type: 'PLACE_PIECE', tileIndex: tileIndex});}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
