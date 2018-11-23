import React, { Component } from 'react'
import { connect } from 'react-redux'

class Board extends Component {

  /* handleClick = function(value){
    this.props.placePiece(this.props.board[value].tileIndex)
  } */

  handleClick = (value) => {
    this.props.placePiece(this.props.board[value].tileIndex)
  }

  render() {
    console.log("Board state: ", this.props.board);

    const tiles = this.props.board;
    const boardLayout = tiles.map(tile => {
      var piece = ' ';
      if (tile.occupant === 1) { piece = 'X' }
      else if (tile.occupant === 2) { piece = 'O' }
      
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

const mapStateToProps = (state) => {
  return {
    board: state.board
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    placePiece: (tileIndex) => { dispatch ({type: 'PLACE_PIECE', tileIndex: tileIndex});}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
